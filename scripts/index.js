'use strict';
/* global $,shoppingList, store, Item, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  // api.getItems()
  //   .then((items) => {
  //     items.forEach((item) => store.addItem(item));
  //     shoppingList.render();
  //   })
  //   .catch(err => console.log(err.message));
 
});

store.items.push(Item.create('apples'));

console.log(api.BASE_URL);