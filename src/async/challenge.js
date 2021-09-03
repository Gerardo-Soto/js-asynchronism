//

//import our Promise for the API
const fetchData = require('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';
    
const getDataCharacter = async (uri_api) => {
    try {
        // first call
        const data = await fetchData(url_api);
        // ${}${} <- url composed + id
        const character = await fetchData(`${API}${data.character[0].id}`);
        // ${character} <- different url + dimension
        const origin = await fetchData(`${character}.origin.url`);
        // Show info:
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        //const error = new Error();
        console.log(error);
    }
}