var apiKey = require('./../.env').apiKey;

export class DoctorAPI {
  constructor() {

  }

  getDoctors(apiKey) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=sick&location=45.5231,-122.6765,100&user_location=45.5231,-122.6765&skip=0&limit=10&user_key=fd8734588d4788a742859b150c18e848`,
      type: "GET".
      data: {
        format: 'json'
      },
      success: function(response) {
        
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    })
  }
}
