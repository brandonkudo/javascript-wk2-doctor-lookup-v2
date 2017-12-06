var apiKey = require('./../.env').apiKey;


export class Call {
  constructor(){
  }
  getData(response, displayData) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${response}&location=45.5231,-122.6765,100&user_location=45.5231,-122.6765&skip=0&limit=10&user_key=${apiKey}`).then(function(response){
      displayData(response)
    }).fail(function(error) {
      error(error);
    });
  }
}
