var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
require('firebase/storage');
require('firebase/firestore');

const consts = require('../common/consts');

// Initialize Firebase
var firebaseConfig = {
    apiKey: consts.envs.apiKey,
    authDomain: consts.envs.authDomain,
    databaseURL: consts.envs.databaseURL,
    projectId: consts.envs.projectId,
    storageBucket: consts.envs.storageBucket,
    messagingSenderId: consts.envs.messagingSenderId,
    appId: consts.envs.appId
};// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth;
const storage = firebase.storage;
const database = firebase.database;
const firestore = firebase.firestore;

module.exports = { auth, database, storage, firestore, firebase };
