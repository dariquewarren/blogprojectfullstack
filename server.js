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

// data locations for different article types
const author = 'Darique Tester'

var DraftsRef = FirebaseDB.ref(author +"/drafts")
var PublishedRef = FirebaseDB.ref(author +"/published")


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

// CREATE aka create PUT routes 

// READ aka create GET routes  

  // get all drafts
app.get('/drafts/all', async (req, res) => { //Line 9
    // grabbed firebase crud function
  try{
    let realData 
   await DraftsRef.once("value", function(snapshot) {
     const data = snapshot.val()
      const newDataArray= []
for (const info in data){
    newDataArray.push({
        id:info,
        author: data[info].articleAuthor,
        title: data[info].title,
        subtitle: data[info].subtitle,
        image: data[info].image,
        article: data[info].article,
        datePublished: data[info].datePublished,
        timePublished: data[info].timePublished,
        type: data[info].articleType

    })
}
      realData = newDataArray
    });
if(!realData){
  res.status(404).send()
}
res.status(200).send({ express: 'drafts/all connected', realData })
   
  }catch(e){
    console.log('error', e)
  }

  });

  // get single draft
  app.get('/drafts/single/:id', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  });

       // get all published articles

      // get single published article

// UPDATE aka create patch routes

// DELETE/DESTROY aka create DELETE routes 

