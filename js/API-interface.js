import { DoctorAPI } from "./../js/API.js";
var apiKey = require('./../.env').apiKey;

function showDoctor(doctor) {
  $("#doctor-name").text(doctor);
}

function error() {
  $("#error").text("Uh oh an error occurred");
}


$(document).ready(function() {
  $("#results").hide();
  $("#form").submit(function(event) {
    event.preventDefault();
    $("#results").show();
    var newAPI = new API();
    let input = $("#ailment").val();
    newAPI.getDoctors(input)
  });
});
