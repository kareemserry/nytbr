const firebase = require("../../common/firebase");
const logger = require('../../common/logger')(module.filename);
express = require("express");


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
                return res.json({ data: data, msg: "User Successfully registered" });
            }).catch(function (error) {
                // Handle Errors here.
                return res.status(400).json({ error: error.message })
            })
    }
    catch (e) {
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
            .then((data) => {
                return res.json({ msg: "User Successfully logged in", data: data });
            })
            .catch(function (error) {
                // Handle Errors here.
                if (error.message == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
                    return res.status(400).json({ error: "User doesn't exist" })
                }
                return res.status(400).json({ error: error.message })
            });

    }
    catch (e) {
        return res.status(400).json({ error: 'Login Failed' });
    }
});

router.post("/signout", async (req, res) => {
    try {
        firebase.auth().signOut().then(function () {
            return res.json({ msg: "User Successfully Signed Out" });
        }).catch(function (error) {
            // An error happened.
        });
    }
    catch (e) {
        return res.status(400).json({ error: 'Signout Failed' });
    }
});

module.exports = router;