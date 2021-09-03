// installation is required for xmlhttprequest --save

// import our Promise for the API
const fetchData = require('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
.then(data => {
    // show the count of characters
    console.log(data.info.count);
    // get the first character and send url to fetchData
    return fetchData(`${API}${data.results[0].id}`);
})
.then(data => {
    // show the name of the first character
    console.log(data.name);
    // get mote info about the character
    return fetchData(data.origin.url);
})
.then(data => {
    // show the dimension about the first character
    console.log(data.dimension);
})
.catch(err => console.log(err));
