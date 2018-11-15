 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAtInRa4q0RPct8CrfBmLw5_ySDCEYEu6Y",
    authDomain: "timesheet-4d390.firebaseapp.com",
    databaseURL: "https://timesheet-4d390.firebaseio.com",
    projectId: "timesheet-4d390",
    storageBucket: "timesheet-4d390.appspot.com",
    messagingSenderId: "201015094204"
  };
  firebase.initializeApp(config);

  var database = firebase.database();




  $("#submit").on("click", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get inputs
    name = $("#name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#start-date").val().trim();
    monthlyRate = $("#monthly-rate").val().trim();

    var employee = {
        'name': name,
        'role': role,
        'start date': startDate,
        'monthly rate': monthlyRate,
    }

    console.log(employee)
    // Change what is saved in firebase
    database.ref().push(employee);
  });