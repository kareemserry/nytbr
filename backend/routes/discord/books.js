const firebase = require("../../../common/firebase");
const logger = require('../../../common/logger')(module.filename);
const consts = require('../../../common/consts')
const api = require('../../api')
const express = require("express");
const util = require('util')
const validator = require('../../validations/books')


const router = express.Router();

router.use(express.json());

router.get('/fav', async (req, res) => {
    const isValidated = validator.discordFavoritesGetValidation(req.body)
    if (isValidated.error) {
        return res
            .status(400)
            .send({ error: isValidated.error.details[0].message });
    }
    if (req.body.secret != consts.envs.secret)
        return res.status(404).send() //this api is for discord only
    const users = await firebase.firestore().collection('users').where('discordID', '==', req.body.discordID).get()
    if (users.empty) {
        return res.status(404).json({ error: "This discord ID is not linked to a user" })
    }
    users.forEach(user => { return res.status(200).json(user.data().favourites) })
})


module.exports = router;