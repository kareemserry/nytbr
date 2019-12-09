const firebase = require("../../../common/firebase");
const logger = require('../../../common/logger')(module.filename);
const consts = require('../../../common/consts');
const api = require('../../api');
const express = require("express");
const util = require('util');
const validator = require('../../validations/books');
const router = express.Router();

router.use(express.json());

router.get('/fav', async (req, res) => {
    const isValidated = validator.discordFavoritesGetValidation(req.query);
    if (isValidated.error) {
        return res
            .status(400)
            .json({ error: isValidated.error.details[0].message });
    }
    if (req.query.secret != consts.envs.secret)
        return res.status(403).send(); //this api is for discord only
    const users = await firebase.firestore().collection('users').where('discordID', '==', req.query.discordID).get();
    if (users.empty) {
        return res.status(404).json({ error: "This discord ID is not linked to a user" });
    }
    users.forEach(async (user) => {
        const isbns = user.data().favourites;
        const favourites = [];
        for (const q of isbns) {
            const data = (await api.googleBooks.get('volumes', { params: { q: `isbn:${q}` } })).data;
            if (!data) { logger.warn(`no data found for isbn: ${q}`); continue; }
            favourites.push(data.items[0].volumeInfo);
        }
        return res.status(200).json(favourites);
    });
});


module.exports = router;