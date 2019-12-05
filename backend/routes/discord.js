const firebase = require("../../common/firebase");
const logger = require('../../common/logger')(module.filename);
const consts = require('../../common/consts')
const express = require('express');
const validator = require('../validations/discord')


const router = express.Router();

router.use(express.json());

router.post('', async (req, res) => {
    try {
        const user = await firebase.auth().currentUser
        if (!user) return res.status(401);
        const isValidated = validator.discordValidation(req.body);
        if (isValidated.error)
            return res
                .status(400)
                .send({ error: isValidated.error.details[0].message }); return res.status(200).json(user);
    } catch (e) {
        logger.error(e);
        return res.status(500);
    }
})

module.exports = router;
