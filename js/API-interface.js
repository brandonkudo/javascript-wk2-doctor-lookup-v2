import {Call} from "./../js/API.js";


let displayData = function(response) {
  $("#output").show();
  if(response.data.length > 0) {
  for (var i = 0; i < response.data.length; i++) {
    let index = response.data[i];
    let profiles = index.profile;
    $("#output").append(`<p class="name">${profiles.first_name} ${profiles.last_name}</p>`);
    for (var j = 0; j < index.practices.length; j++) {
      let practice = index.practices[j];
      let address = practice.visit_address;
      let site = practice.website;
      $("#output").append(`<p class="address">${address.street}</p>`);
      $("#output").append(`<p class="city">${address.city}, ${address.state}</p>`)
      $("#output").append(`<p class="phone">${practice.phones[0].number}</p>`);
      if(site === undefined) {
        $("#output").append(`<p class="website">This doctor does not have a website</p>`);
      } else {
        $("#output").append(`<a href="${site}" class="website">${site}</a>`);
      }
      if(practice.accepts_new_patients === true) {
        $("#output").append(`<p class="new-patient">Now accepting new patients</p>`);
      } else {
        $("#output").append(`<p class="new-patient">Not accepting new patients</p>`);
      }
    }
  }
  } else {
    $("#output").append(`No doctors in the area fit match that inquiry.`)
  }
}

let error = function(error) {
  $("#output").text("Uh oh an error occurred");
}

$(document).ready(function() {

  var newCall = new Call();
  $("#ailment-button").click(function() {
    let input = $("#ailment").val();
    newCall.getData(input, displayData)
  });

  $("#name-button").click(function() {
    let input = $("#name").val();
    newCall.getData(input, displayData)
  });
});
