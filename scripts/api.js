'use strict';
const api = (function (){
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/cody/items/';

    function getItems(){
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => data);
        //return Promise.resolve('A successful response!');
    }
    

    return {
        getItems
    };
}());