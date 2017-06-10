const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./createUser');
const serviceAccount = require('./service_account.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://o-time-p.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
