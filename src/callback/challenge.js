// installation is required for xmlhttprequest --save

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(uri_api, callback) {
    // XML Object instance
    let xhttp = new XMLHttpRequest();
    // asynchronous request = true
    xhttp.open('GET', uri_api, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4){
            if (xhttp.status === 200){
                // callback
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error 1 ' + uri_api);
                return callback(error, null);
            }            
        }
    }
    xhttp.send();
};

// Make 3 requests to the API

fetchData(API, function (error1, data1) {
    if (error1) return console.log(error1);
    // make a request to the ID of the first element/character of the list:
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.log(error2);
        // make a request to the API + origin:
        fetchData(data2.origin.url, function (error3, data3){
            if (error3) return console.log(error3);
            console.log(data1.info.count);
            //console.log(data1.results[0].name); // is ok
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})