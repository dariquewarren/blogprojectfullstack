    // imported firebase crud function

var Firebase = require('firebase/app')
const { getDatabase } = require('firebase/database')
const express = require('express'); //Line 1
const app = express(); //Line 2
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000; //Line 3
var admin = require("firebase-admin");
// create application/json parser
var jsonParser = bodyParser.json({limit: '5mb'})
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
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
app.use(cookieParser('identificationhoe'))

// logged in user

// Get a reference to the database service
// const FirebaseDB = getDatabase(FirebaseApp);
//
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// CREATE aka create PUT routes 
app.post('/save/drafts/:type',jsonParser, async (req, res) => { //Line 9
 let message
 try{
   let article = await {...req.body, type: req.params.type}
   await DraftsRef.push(article, (error)=>{
  if(error){
    message = `Error ${error}`
    res.status(404).send({message, error})

  }else{
    message='success'
    res.status(200).send({message})

  }
})
 

 }catch(e){
   res.status(404).send({error:e, message})
 }

   //Line 10
});
app.post('/save/published/:type',jsonParser, async (req, res) => { //Line 9
  let message
  try{
    let article = await {...req.body, type: req.params.type}
    // adds data with id
    await PublishedRef.push(article, (error)=>{
   if(error){
     message = `Error ${error}`
     res.status(404).send({message, error})
 
   }else{
     message='success'
     res.status(200).send({message})
 
   }
 })
  
 
  }catch(e){
    res.status(404).send({error:e, message})
  }
});
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
      author: data[info].author,
      title: data[info].title,
      subtitle: data[info].subtitle,
      image: data[info].image,
      article: data[info].article,
      datePublished: data[info].datePublished,
      timePublished: data[info].timePublished,
      type: data[info].type,
      sortableDate: data[info].sortableDate,
      sortableTime: data[info].sortableTime,
      tags: data[info].tags,
      category: data[info].category

  })
}
      realData = newDataArray
    });
if(!realData){
  res.status(404).send()
}
res.status(200).send({ message: 'drafts/all connected', realData })
   
  }catch(e){
    console.log('error', e)
  }

  });

  // get single draft
  app.get('/drafts/single/:id',jsonParser, async (req, res) => { //Line 9
    try{
     DraftsRef.child(req.params.id).on("value", function(snapshot) {
       const data = snapshot.val()
       res.status(200).send({ message: 'drafts single connected', data})
      }, (errorObject)=>{
        console.log('The read failed: ' + errorObject.name)
      });
 
     
    }catch(e){
      console.log('error', e)
    }
    });

  
       // get all published articles
app.get('/published/all', async (req, res)=>{
    try{
      let realData 
     await PublishedRef.once("value", function(snapshot) {
       const data = snapshot.val()
        const newDataArray= []
  for (const info in data){
      newDataArray.push({
        id:info,
        author: data[info].author,
        title: data[info].title,
        subtitle: data[info].subtitle,
        image: data[info].image,
        article: data[info].article,
        datePublished: data[info].datePublished,
        timePublished: data[info].timePublished,
        type: data[info].type,
        sortableDate: data[info].sortableDate,
        sortableTime: data[info].sortableTime,
        tags: data[info].tags,
        category: data[info].category

    })
  }
        realData = newDataArray
      });
  if(!realData){
    res.status(404).send()
  }
  res.status(200).send({ message: 'drafts/all connected', realData })
     
    }catch(e){
      console.log('error', e)
    }
  })
      // get single published article
      app.get('/published/single/:id', jsonParser, async (req, res) => { //Line 9
        try{
          PublishedRef.child(req.params.id).on("value", function(snapshot) {
            const data = snapshot.val()
            res.status(200).send({ message: 'drafts single connected', data})
           }, (errorObject)=>{
             console.log('The read failed: ' + errorObject.name)
           });
      
          
         }catch(e){
           console.log('error', e)
         }
              });
// UPDATE aka create patch routes
app.patch('/update/published/:id', jsonParser, async (req, res)=>{
  try{
    // grab ref, locate child by id child(req.params.id), update child with body
//    await PublishedRef.set({})
  await PublishedRef.child(req.params.id).update(req.body)

res.status(200).send({ message: 'published updated', body: req.body })
   
  }catch(e){
    res.status(200).send({ message: 'published not updated', error: e })

    console.log('error', e)
  }
})
app.patch('/update/drafts/:id', jsonParser, async (req, res)=>{
  try{
    // grab ref, locate child by id child(req.params.id), update child with body
//    await PublishedRef.set({})
  await DraftsRef.child(req.params.id).update(req.body)

res.status(200).send({ message: 'Draft updated'})
   
  }catch(e){
    res.status(200).send({ message: 'Draft not updated', error: e })

    console.log('error', e)
  }
})
// DELETE/DESTROY aka create DELETE routes 
              // deleta all PUBLISHED
       
              //  delete single published
              app.delete('/delete/published/single/:id', jsonParser, async (req, res)=>{
                try{
                  await PublishedRef.child(req.params.id).set({})
                
              
              res.status(200).send({ message: ' all published deleted' })
                 
                }catch(e){
                  res.status(200).send({ message: 'all published not deleted' })

                  console.log('error', e)
                }
              })
              // delete all DRAFTS
            
              // delete single DRAFTS
              app.delete('/delete/drafts/single/:id', jsonParser, async (req, res)=>{
                try{
                  await DraftsRef.child(req.params.id).set({})
                
              
              res.status(200).send({ message: ' all published deleted' })
                 
                }catch(e){
                  res.status(200).send({ message: 'all published not deleted' })

                  console.log('error', e)
                }
              })



              // AUTH ROUTES
              app.post('/signin', jsonParser, async (req, res)=>{
              try{
                const userToken = await req.body.email.toString()
                if (!userToken){
                  res.status(404).send({message: 'no user token in reqbodyidToken'})
                }
                res.cookie('firebase', userToken)
res.status(200).send({userToken})
console.log(userToken)            

}catch(e){
                res.status(400).send({message: 'error', error: e})
              }

              })


              app.post('/signup', jsonParser, async (req, res)=>{
             

                try{
                  const User = await req.body
                const newUser =  await admin.auth().createUser(User)
                  if(!User){
                    res.status(404).send({message: 'no new user/ issue with request body'})
                  }
                  res.status(200).send({newUser})
                }catch(e){
                  res.status(400).send({error:e})
                }
              })