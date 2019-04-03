'use strict';
/* global shoppingList, store, Item, api */
const api = (function (){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/cody/items/';

  function getItems(){
    return  fetch(BASE_URL + '', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  

  function createItem(name){
    let newItem ={
      name,
    };
    return JSON.stringify(newItem);
  }

  //     return  fetch(BASE_URL + 'POST', {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //         .then(stringObj)
  //     });
  //   }

  return {
    getItems,createItem
  };
}());