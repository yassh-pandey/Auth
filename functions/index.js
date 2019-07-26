const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminCustomClaim = functions.https.onCall((data, context)=>{
    admin.auth().setCustomUserClaims()
        .then(()=>{
            console.log('Custom claim added');
        })
        .catch(err=>{
            console.log(err.message);
        });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
