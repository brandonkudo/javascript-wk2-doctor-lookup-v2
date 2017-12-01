var apiKey = require('./../.env').apiKey;

export class DoctorAPI {
  constructor(input) {
    this.input = input
  }

  getDoctors(input, apiKey) {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${input}&location=45.5231,-122.6765,100&user_location=45.5231,-122.6765&skip=0&limit=10&user_key=${apiKey}`,
      type: "GET".
      data: {
        format: 'json'
      },
      success: function(response) {
        let doctor = `${response.data.profile.first_name} ${response.data.profile.last_name}`;
        showDoctor(doctor);
      },
      error: function() {
        error();
      }
    })
  }
}
