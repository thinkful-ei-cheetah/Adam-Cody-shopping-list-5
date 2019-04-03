'use strict';
/* global $,shoppingList, store, Item, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  // api.getItems()
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //   });

  api.getItems()
.then(res => res.json())
.then((items) => {
  items.forEach((item) => store.addItem(item));
  shoppingList.render();
});
 
});



 store.items.push(Item.create('apples'));


  


console.log(api.BASE_URL);