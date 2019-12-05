const firebase = require("../../common/firebase");
const logger = require('../../common/logger')(module.filename);
const consts = require('../../common/consts')
const express = require("express");


const router = express.Router();

router.use(express.json());

const validator = require("../validations/auth");


// Registers User using email and password
router.post("/register", async (req, res) => {
    const isValidated = validator.registerValidation(req.body);
    if (isValidated.error)
        return res
            .status(400)
            .send({ error: isValidated.error.details[0].message });
    var email = req.body.email;
    var password = req.body.password;
    try {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((data) => {
                logger.info(`Registration Successful: ${data.user.email}`)
                return res.json({ data: data, msg: "User Successfully registered" });
            }).catch(function (error) {
                logger.warn('Registration Failed: ', error)
                if (error.message == consts.firebase.errorMessage.duplicateEmail)
                    return res.status(409).json({ error: error.message })
                return res.status(400).json({ error: error.message })
            })
    }
    catch (e) {
        logger.warn('Registration Failed: ', e)
        return res.status(400).json({ error: 'Registration Failed' });
    }
});

router.post("/login", async (req, res) => {
    const isValidated = validator.loginValidation(req.body);
    if (isValidated.error)
        return res
            .status(400)
            .send({ error: isValidated.error.details[0].message });
    var email = req.body.email;
    var password = req.body.password;
    try {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (data) => {
                var user = data.user;
                await firebase.firestore().collection('users').doc(user.uid).set({
                    discordID: '',
                    favourites: [],
                });
                req.session.user = user;
                return res.json({ msg: "User Successfully logged in", data: data });
            })
            .catch(function (error) {
                // Handle Errors here.
                if (error.message == consts.firebase.errorMessage.invalidIdentifier
                    || error.message == consts.firebase.errorMessage.invalidPassword) {
                    logger.warn(`Login failed ${email}`)
                    return res.status(401).json({ error: "Invalid Credentials" })
                }
                logger.warn(`Login failed ${email}`)
                return res.status(400).json({ error: error.message })
            });

    }
    catch (e) {
        logger.warn(`Login failed ${email}`)
        return res.status(400).json({ error: 'Login Failed' });
    }
});

router.post("/signout", async (req, res) => {
    try {
        firebase.auth().signOut().then(function () {
            logger.info(`User ${req.session.user.email} signed out`);
            req.session.destroy();
            return res.json({ msg: "User Successfully Signed Out" });
        }).catch(function (error) {
            return res.status(500).json({ error: 'Signout Failed' });
        });
    }
    catch (e) {
        return res.status(500).json({ error: 'Signout Failed' });
    }
});

module.exports = router;