

 export const getAllDrafts= fetch('/drafts/all')
  export const getAllPublished= fetch('/published/all')
  export const getSingleDraft=fetch('/drafts/single/:id')
  export const getSinglePublished=fetch('/published/single/:id')

  export const saveDraft = (theArticle)=>{
    return fetch('/save/drafts',{
      method: 'POST',
      headers: {
       'Content-Type': 'application/json'
       // 'Content-Type': 'application/x-www-form-urlencoded',
     },
       body: JSON.stringify(theArticle) 
     })
   }

   export const publishArticle= (theArticle)=>{
    return fetch('/save/published',{
     method: 'POST',
     headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
      body: JSON.stringify(theArticle) 
    })
   }

   export const   updateArticle= (theArticle)=>{
     return fetch('/update/published/:id',{
      method: 'PATCH',
      headers: {
       'Content-Type': 'application/json'
       // 'Content-Type': 'application/x-www-form-urlencoded',
     },
       body: JSON.stringify(theArticle) 
     })
    }

    export const  updateDraft= (theArticle)=>{
     return fetch('/update/drafts/:id',{
      method: 'PATCH',
      headers: {
       'Content-Type': 'application/json'
       // 'Content-Type': 'application/x-www-form-urlencoded',
     },
       body: JSON.stringify(theArticle) 
     })
    }
    export const deleteSinglePublishedArticle= (id)=>{
     return fetch(`/delete/published/single/${id}`,{method: 'DELETE'})
   }
   export const deleteSingleDraft= (id)=>{
     return fetch(`/delete/drafts/single/${id}`,{method: 'DELETE'})
   }

   export const deleteAllDrafts= fetch('/delete/drafts/all',{method: 'DELETE'})
   export const deleteAllPublishedArticles= fetch('/delete/published/all',{method: 'DELETE'})