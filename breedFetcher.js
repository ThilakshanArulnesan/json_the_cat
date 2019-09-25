const request = require('request');



const fetchBreedDescription = function(str, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${str}`, (error, response, body) => {
    let desc = null;
    if (error) {
      callback(error, desc);
      console.log('Error details:', error); // Print the error if one occurred
      if (response && response.statusCode) console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    } else {
      let obj = JSON.parse(body);
      if (obj[0] && obj[0].description) {
        desc = obj[0].description.trim(); //Grabs the description
      } else {
        desc = "Breed was not found, make sure to use the proper four letter abbreviation";
      }
      callback(null, desc);
    }
  });

};

module.exports = { fetchBreedDescription };
