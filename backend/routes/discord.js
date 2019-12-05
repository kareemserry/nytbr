const firebase = require("../../common/firebase");
const logger = require('../../common/logger')(module.filename);
const consts = require('../../common/consts')
const express = require('express');
const validator = require('../validations/discord')

const books = require('./discord/books')

const router = express.Router();

router.use(express.json());
router.use('/books', books);
router.post('', async (req, res) => {
    try {
        const user = req.session.user
        if (!user) return res.status(401).send();
        const isValidated = validator.discordValidation(req.body);
        if (isValidated.error) {
            return res
                .status(400)
                .send({ error: isValidated.error.details[0].message }); return res.status(200).json(user);
        }
        await firebase.firestore().collection('users').doc(user.uid).set({ discordID: req.body.discordID }, { merge: true })
        logger.info(`discord id for user ${user.email} set to ${req.body.discordID}`);
        return res.status(200).send();
    } catch (e) {
        logger.error(e);
        return res.status(500);
    }
})

module.exports = router;
