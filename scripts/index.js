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
  api.createItem('pears')
    .then(res => res.json())
    .then((newItem) => {
      return api.getItems();
    })
    .then(res => res.json())
    .then((items) => {
      console.log(items);
    });
});

store.items.push(Item.create('apples'));


  


console.log(api.BASE_URL);