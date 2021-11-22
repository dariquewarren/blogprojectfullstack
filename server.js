    // imported firebase crud function

var Firebase = require('firebase/app')
const { getDatabase } = require('firebase/database')
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
var admin = require("firebase-admin");

var serviceAccount = require("./blog-project-3d102-firebase-adminsdk-9bipa-e758be6a06.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://blog-project-3d102-default-rtdb.firebaseio.com"
});
// put config vaues and credentials inside environment variables. look into project that used mongodb. turbo ticket
var FirebaseDB = admin.database();
var DraftsRef = FirebaseDB.ref('Darique Tester' +"/drafts")



const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "blog-project-3d102.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://blog-project-3d102-default-rtdb.firebaseio.com/",
  storageBucket: "blog-project-3d102.appspot.com",
  messagingSenderId: "772840395218",
  appId: process.env.FIREBASE_APP_ID,
  projectId: process.env.FIREBASE_PROJECT_ID

};


// Get a reference to the database service
// const FirebaseDB = getDatabase(FirebaseApp);
//
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});
app.get('/drafts/all', async (req, res) => { //Line 9
    const author = 'Darique Tester'
    // grabbed firebase crud function
  try{
    let realData 
   await DraftsRef.once("value", function(snapshot) {
      console.log(snapshot.val());
      realData = snapshot.val()
    });
if(!realData){
  res.status(404).send()
}
res.status(200).send({ express: 'drafts/all connected', realData })
   
  }catch(e){
    console.log('error', e)
  }

  });
  app.get('/drafts/single/:id', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  });