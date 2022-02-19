import {initializeApp} from "firebase/app"
import { getDatabase, ref, set, child, get} from "firebase/database";
import { getFirestore, addDoc, collection } from "firebase/firestore";
// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
    apiKey: "AIzaSyB6Swn5ui5X-Z6NKyVU-l-rSWlviiPXZ04",
    authDomain: "blog-project-3d102.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://blog-project-3d102-default-rtdb.firebaseio.com/",
  storageBucket: "blog-project-3d102.appspot.com",
  messagingSenderId: "772840395218",
  appId: "1:772840395218:web:e86b566a2aabe70a6ab80b",
  projectId: "1:772840395218:web:e86b566a2aabe70a6ab80b"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app)
// const firebaseApp = initializeApp({
//  apiKey: "AIzaSyB6Swn5ui5X-Z6NKyVU-l-rSWlviiPXZ04",
//     authDomain: "blog-project-3d102.firebaseapp.com",
//   projectId: "1:772840395218:web:e86b566a2aabe70a6ab80b"
// });



// Get a reference to the database service
// const database = getDatabase();
//     CRUD

// Create
export const addArticle = (type, author)=>{
  set(ref(database, 'users/' + author + `/${type}/`), {
    author,
    type
  });

  console.log('add article',{type, author})
   
 
 
 }

// READ

export const getArticlesByType = async (author,type)=>{
  const dbRef = ref(getDatabase());
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

const articleList = await theArticles
return articleList
}













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

