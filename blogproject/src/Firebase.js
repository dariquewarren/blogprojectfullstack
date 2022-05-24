import {initializeApp} from "firebase/app"
import { getDatabase, ref, set, child, get, push, remove, update} from "firebase/database";
import { getAuth,browserLocalPersistence,updateProfile , setPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import Dotenv from 'dotenv'
Dotenv.config()

// change to use dot env
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app)
const auth = getAuth();
// const firebaseApp = initializeApp({
//  apiKey: "AIzaSyB6Swn5ui5X-Z6NKyVU-l-rSWlviiPXZ04",
//     authDomain: "blog-project-3d102.firebaseapp.com",
//   projectId: "1:772840395218:web:e86b566a2aabe70a6ab80b"
// });



// Get a reference to the database service
// const database = getDatabase();
//     CRUD

// Create

// create instance for creating first entry
// create instance for adding to list of entries


 export const addSingleArticle = (type, author, article)=>{
   const articleRef = ref(database, `${author}/${type}`)
   const pushRef = push(articleRef)
   set(pushRef, article)
   
 
 }
// READ

export const getArticlesByType = async (author,type)=>{
  const dbRef = ref(database);
  var theArticles =[]
 await get(child(dbRef, `${author}/${type}`)).then((snapshot) => {
  if (snapshot.exists()) {
    var theData = snapshot.val()
    for (const info in theData){
      theArticles.push({
        id:info,
        ...theData[info]
      })
}
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

console.log('theArticles',theArticles )

const articleList = theArticles
return articleList
}
export const getEveryArticle = async ()=>{
  const dbRef = ref(database);
  var theArticles =[]
 await get(child(dbRef, '/')).then((snapshot) => {
  if (snapshot.exists()) {
    var theData = snapshot.val()
    console.log('all data', theData)
    for (const info in theData){
      theArticles.push({
        ...theData
      })
      return theArticles
}
  } else {
    console.log("No data available");
  }
}).then((data)=>{
 
    
  console.log('data from the articles',data)
}).catch((error) => {
  console.error(error);
});

console.log(`theArticles`,theArticles)

const articleList = theArticles
return articleList

}
// UPDATE
export const updateArticleByID = (type, author, id, updateObject)=>{
  
  
  // set(ref(deltab, `${author}/${type}`), article);
  const postListRef = ref(database, `${author}/${type}/${id}`)
   update(postListRef,updateObject) 
}
// DELETE

export const deleteArticleByID = (type,author,id)=>{
  
  
  // set(ref(deltab, `${author}/${type}`), article);
  const postListRef = ref(database, `${author}/${type}/${id}`)
  remove(postListRef)
}


// AUTHENTICATION

// SIGN UP
export const signUpUser = async (email, password)=>{
 await createUserWithEmailAndPassword(auth, email, password)
 .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log('errors',{errorMessage,errorCode })
  });
window.location.reload('/updateProfile')
}
// SIGN IN
export const signInUser =  (email, password)=>{

   setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the browserLocal
    // session 
    // ...
    
    return signInWithEmailAndPassword(auth,email, password).then((userCredential) => {
      // Signed in 
     window.location.assign('/')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert('error')
      console.log('errors',{errorMessage,errorCode })
    });;
  })
  

  
  
}
// SIGN OUT /LOGOUT
export const logOut = ()=>{

signOut(auth).then(() => {
  // Sign-out successful.
  alert('signed out')
  window.location.reload()
}).catch((error) => {
  // An error happened.
  alert(`error: ${error}`)
});

}
// CREATE PROFILE
//UPDATE PROFILE
export const updateUserProfile =(user,userObject)=>{
  if(!user){
return alert('please sign in first to update')
  }else{
    updateProfile(user, userObject)

  }
}
// ACCESS PROFILE
// DELETE PROFILE










//  CREATE
//         //NOTE: OVERRIDES DATA AT THE LOCATION. create doc WITHOUT DB GENERATED USERID. userid here is replaced by the author parameter & value
// export const writeUserData = async (type, author, articleObject) =>{
//     await FirebaseDB.set(FirebaseDB.ref(db, author +'/' + type), articleObject);
//     }

//     // create doc WITH DB GENERATED USERID (PREFERRED)
// // Add a new document with a generated id.
// export  const addNewArticle =(type, author, data)=>{
//     const articleListRef = FirebaseDB.ref(db,author + '/' + type);
//     const newArticleRef = FirebaseDB.push(articleListRef);
//     FirebaseDB.set(newArticleRef, data);
//  }
// // READ
// // read from and LISTEN frm database
// export const getArticlesByType = (type, author)=>{
  
//  console.log('get articles by typr', type, author)
  


// }
// // UPDATE
// export const updatePublishedArticle =(id, type, author, updateObject)=>{
//     FirebaseDB.set(FirebaseDB.ref(db, author + '/' + type + id), updateObject)
//       .then(() => {
//         // Data saved successfully!
//         console.log('update successfull')
//       })
//       .catch((error) => {
//         // The write failed...
//         console.log('no update', error)
//       });
// }

// //DELETE
// //The simplest way to delete data is to call remove() on a reference to the location of that data.
// // You can also delete by specifying null as the value for another write operation such as set() or update(). 
// //You can use this technique with update() to delete multiple children in a single API call.

// export const deleteArticle =(type, author, id)  =>{
//     const draftsRefSingle = FirebaseDB.ref(db, author + '/' + type + id);
//     const draftsRefAll = FirebaseDB.ref(db, author + '/' + type);
// // this sillbe needed last-ish

//     if(id.length){
//         draftsRefSingle.remove()
//         console.log('removed single doc:', id)
//     }else{
//         draftsRefAll.remove()
//         console.log('removed all docs at path: /', `${author} + '/' + ${type}`)

//     }

// }

