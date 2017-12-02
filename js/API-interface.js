var apiKey = require('./../.env').apiKey;



$(document).ready(function() {
  // $("#output").hide();
  $("#ailment-button").click(function() {
    let input = $("#ailment").val();
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${input}&location=45.5231,-122.6765,100&user_location=45.5231,-122.6765&skip=0&limit=10&user_key=${apiKey}`).then(function(response){
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
    }).fail(function(error) {
      $("#output").text("Uh oh an error occurred");
    });
  });

  $("#name-button").click(function() {
    let input = $("#name").val();
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${input}&location=45.5231,-122.6765,100&user_location=45.5231,-122.6765&skip=0&limit=10&user_key=${apiKey}`).then(function(response){
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
          $("#output").append(`<p class="address">${address.street}</p>`)
          $("#output").append(`${address.city}, ${address.state}</p>`);
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
    }).fail(function(error) {
      $("#output").text("Uh oh an error occurred");
    });
  });
});
