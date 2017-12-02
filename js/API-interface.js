// import { Doctor } from "./../js/API.js";
var apiKey = require('./../.env').apiKey;
// var newDoctor = new Doctor();

// function showDoctor(doctor) {
//   $("#doctor-name").text(doctor);
// }
//
// function error() {
//   $("#error").text("Uh oh an error occurred");
// }


$(document).ready(function() {
  $("#results").hide();
  $("#ailment-button").click(function() {
    let input = $("#ailment").val();
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${input}&location=45.5231,-122.6765,100&user_location=45.5231,-122.6765&skip=0&limit=10&user_key=${apiKey}`).then(function(response){
      $("#output").show();
      if(response.data.length > 0) {
      for (var i = 0; i < response.data.length; i++) {
        let doctor = `${response.data[i].profile.first_name} ${response.data[i].profile.last_name}`;
        $("#output").append(`${doctor}<br>`);
        for (var j = 0; j < response.data[i].practices.length; j++) {
          let practice = response.data[i].practices[j];
          $("#output").append(`${practice.visit_address.street}<br>${practice.visit_address.city},`)
          $("#output").append(`${practice.phones[0].number}`);

        }
      }
      } else {
        $("#doctor-name").append("No doctors in the area fit match that inquiry.")
      }
    }).fail(function(error) {
      $("#error").text("Uh oh an error occurred");
    });
  });
});
