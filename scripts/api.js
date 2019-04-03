'use strict';
/* global shoppingList, store, Item, api */
const api = (function (){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/cody/items';

  function getItems(){
    return  fetch(BASE_URL); 
      
  }
  const deleteItem = function(id){
    return fetch(`${BASE_URL}/${id}`,{
      method: 'DELETE',
  
    });
  };

  const createItem =function (name){
    const newItem = {
      name,
    };
    const stringObj = JSON.stringify(newItem);
  
    return  fetch(`${BASE_URL}`, {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: stringObj
    });
  };

  const updateItem = (function(id,updateData){
    const stringy = JSON.stringify(updateData);
    return fetch(`${BASE_URL}/${id}`,{
      method:'PATCH',
      headers:{'Content-Type': 'application/json'},
      body:stringy
    });
  });

  return {
    getItems,createItem,updateItem,deleteItem
  };
}());