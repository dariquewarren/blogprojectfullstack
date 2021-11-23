 export const apiObject ={
    getAllDrafts: fetch('/drafts/all'),
    getAllPublished: fetch('/published/all'),
    getSingleDraft:fetch('/drafts/single/:id'),
    getSinglePublished:fetch('/published/single/:id'),
    saveDraft: (theArticle)=>{
     return fetch('/save/drafts',{
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
        body: JSON.stringify(theArticle) 
      })
    },
    publishArticle: (theArticle)=>{
     return fetch('/save/published',{
      method: 'POST',
      headers: {
       'Content-Type': 'application/json'
       // 'Content-Type': 'application/x-www-form-urlencoded',
     },
       body: JSON.stringify(theArticle) 
     })
    },
    updateArticle: (theArticle)=>{
      return fetch('/update/published/:id',{
       method: 'PATCH',
       headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
        body: JSON.stringify(theArticle) 
      })
     },
    updateDraft: (theArticle)=>{
      return fetch('/update/drafts/:id',{
       method: 'PATCH',
       headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
        body: JSON.stringify(theArticle) 
      })
     },
    deleteSinglePublishedArticle: (id)=>{
      return fetch(`/delete/published/single/${id}`,{method: 'DELETE'})
    },
    deleteSingleDraft: (id)=>{
      return fetch(`/delete/drafts/single/${id}`,{method: 'DELETE'})
    },
    deleteAllDrafts: fetch('/delete/drafts/all',{method: 'DELETE'}),
    deleteAllPublishedArticles: fetch('/delete/published/all',{method: 'DELETE'}),
  }