export const userSignIn = async (information)=>{
 await fetch('/signin', {
   method: 'POST',
   body: {information},
 }).then((data)=>{
  return data
 }) 
 .catch((e)=>{
console.log('failure', e)
 })
}
export const userSignUp = async (userData)=>{
  fetch('/signup',{
    method: 'POST',
    body: {userData}
  }).then((response)=>{

    return response.json()
  }).then((data)=>{
return data
  }).then((data)=>{
    return data
      }).catch((e)=>console.log('error', e))
}
 export const getAllDrafts = async ()=>{
 await fetch('/drafts/all').then((response)=>{
     return response.json()
   }).then((data)=>{
     return data.realData
   }).catch((e)=>{
     alert(`${e}`)
   })
 }
  export const getAllPublished = ()=>{
    fetch('/published/all').then((response)=>{
      return response.json()
    }).then((data)=>{
      return data.realData
    }).catch((e)=>{
      alert(`${e}`)
    })
  }
  export const getSingleDraft = async (id)=>{
    const theData = await fetch(`/drafts/single/${id}`)
    return theData
  }
  export const getSinglePublished = async (id)=>{
    const theData = await fetch(`/published/single/${id}`)
    return theData
  }
  export const saveDraft = (theArticle)=>{
    return fetch('/save/drafts/drafts',{
      method: 'POST',
      headers: {
       'Content-Type': 'application/json'
       // 'Content-Type': 'application/x-www-form-urlencoded',
     },
       body: JSON.stringify(theArticle) 
     })
   }

   export const publishArticle= (theArticle)=>{
    return fetch(`/save/published/published`,{
     method: 'POST',
     headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
      body: JSON.stringify(theArticle) 
    })
   }

   export const   updatePublished= (theArticle,theID)=>{
     return fetch(`/update/published/${theID}`,{
      method: 'PATCH',
      headers: {
       'Content-Type': 'application/json'
       // 'Content-Type': 'application/x-www-form-urlencoded',
     },
       body: JSON.stringify(theArticle) 
     }).then((data)=>{
      return data
    }).catch((e)=>{
      console.log(e)
    }) 
    }

    export const  updateDraft= (theArticle, theID)=>{
     return fetch(`/update/drafts/${theID}`,{
      method: 'PATCH',
      headers: {
       'Content-Type': 'application/json'
       // 'Content-Type': 'application/x-www-form-urlencoded',
     },
       body: JSON.stringify(theArticle) 
     }).then((data)=>{
       return data
     }).catch((e)=>{
       console.log(e)
     })    }
    export const deleteSinglePublishedArticle= (id)=>{
     return fetch(`/delete/published/single/${id}`,{method: 'DELETE'})
   }
   export const deleteSingleDraft= (id)=>{
     return fetch(`/delete/drafts/single/${id}`,{method: 'DELETE'})
   }
