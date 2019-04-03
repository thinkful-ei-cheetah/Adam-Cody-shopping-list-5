'use strict';
/* global shoppingList, store, Item, api */
const api = (function (){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/cody/items';


  const listApiFetch = function (... args){
      let error;
      return fetch(...args)
        .then(res => {
            if (!res.ok) {
                error = {code: res.status};
                if (!res.headers.get ('content-type').includes('json')) {
                    error.message = res.statusText;
                    return Promise.reject(error);
                }
            }
            return res.json();
        })
        .then(data => {
            if(error) {
                error.message = data.message;
                return Promise.reject(error);
            }
            return data;
        });
  };
  function getItems(){
    return  listApiFetch(BASE_URL); 
      
  }
  const deleteItem = function(id){
    return listApiFetch(`${BASE_URL}/${id}`,{
      method: 'DELETE',
  
    });
  };

  const createItem =function (name){
    const newItem = {
      name,
    };
    const stringObj = JSON.stringify(newItem);
  
    return  listApiFetch(`${BASE_URL}`, {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: stringObj
    });
  };

  const updateItem = (function(id,updateData){
    const stringy = JSON.stringify(updateData);
    return listApiFetch(`${BASE_URL}/${id}`,{
      method:'PATCH',
      headers:{'Content-Type': 'application/json'},
      body:stringy
    });
  });

  return {
    getItems,createItem,updateItem,deleteItem
  };
}());