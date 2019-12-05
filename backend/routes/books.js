const firebase = require("../../common/firebase");
const logger = require('../../common/logger')(module.filename);
const consts = require('../../common/consts')
const api = require('../api')
const express = require("express");
const util = require('util')
const validator = require('../validations/books')


const router = express.Router();

router.use(express.json());

router.get('', async (req, res) => {
    try {
        const fiction = (await (api.nytimesFiction.get())).data.results.books;
        const nonFiction = (await (api.nytimesNonFiction.get())).data.results.books;
        logger.info('books fetched')
        return res.status(200).json({ fiction, nonFiction });
    } catch (err) {
        logger.warn(err);
        return res.status(500).json({ error: 'Something went wrong!' })
    }
})

router.get('/fav', async (req, res) => {
    const sessionUser = req.session.user
    if (!sessionUser) return res.status(401).send()
    const user = await firebase.firestore().collection('users').doc(sessionUser.uid).get()
    if (!user) {
        logger.warn(`user ${sessionUser.email} has no data!`)
    }
    res.status(200).json(user.data().favourites);
})
router.get('/fav', async (req, res) => {
    const sessionUser = req.session.user
    if (!sessionUser) return res.status(401).send()
    const user = await firebase.firestore().collection('users').doc(sessionUser.uid).get()
    if (!user) {
        logger.err(`user ${sessionUser.email} has no data!`)
        res.status(500).send()
    }
    res.status(200).json(user.data().favourites);
})
router.post('/fav', async (req, res) => {
    const sessionUser = req.session.user
    if (!sessionUser) return res.status(401).send()
    const isValidated = validator.favouritesValidation(req.body);
    if (isValidated.error) {
        return res
            .status(400)
            .send({ error: isValidated.error.details[0].message }); return res.status(200).json(user);
    }
    const user = await firebase.firestore().collection('users').doc(sessionUser.uid).get()
    if (!user) {
        logger.err(`user ${sessionUser.email} has no data!`)
        res.status(500).send()
    }
    const newFavs = user.data().favourites;
    if (!newFavs.includes(req.body.isbn))
        newFavs.push(req.body.isbn)
    try {
        await firebase.firestore().collection('users')
            .doc(sessionUser.uid).set(
                { favourites: newFavs },
                { merge: true });
        return res.status(201).json({ message: "book added to favorites!" });
    } catch (err) {
        logger.warn(err)
        res.status(500).send()
    }
})

router.delete('/fav', async (req, res) => {
    const sessionUser = req.session.user
    if (!sessionUser) return res.status(401).send()
    const isValidated = validator.favouritesValidation(req.body);
    if (isValidated.error) {
        return res
            .status(400)
            .send({ error: isValidated.error.details[0].message }); return res.status(200).json(user);
    }
    const user = await firebase.firestore().collection('users').doc(sessionUser.uid).get()
    if (!user) {
        logger.err(`user ${sessionUser.email} has no data!`)
        res.status(500).send()
    }
    const newFavs = user.data().favourites;
    var index = newFavs.indexOf(req.body.isbn);
    if (index > -1) {
        newFavs.splice(index, 1);
    }
    else
        res.status(404).json({ error: 'book not a favourite' })
    try {
        await firebase.firestore().collection('users')
            .doc(sessionUser.uid).set(
                { favourites: newFavs },
                { merge: true });
        return res.status(200).json({ message: "book deleted from favorites!" });
    } catch (err) {
        logger.warn(err)
        res.status(500).send()
    }
})

module.exports = router;