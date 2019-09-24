const request = require('request');



const makeCatReq = function(str) {
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${str}`, (error, response, body) => {
    if (error) {
      console.log('Error details:', error); // Print the error if one occurred
      if (response && response.statusCode) console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    } else {
      let obj = JSON.parse(body);
      if (obj[0]) {
        console.log(obj[0].breeds[0].description); //Grabs the description
      } else {
        console.log("Breed was not found, make sure to use the proper four letter abbreviation");
      }

    }
  });

};

let breed = process.argv[2];
makeCatReq(breed);
