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
        'startDate': startDate,
        'monthlyRate': monthlyRate,
    }

    console.log(employee)
    // Change what is saved in firebase
    database.ref().push(employee);
  });

  database.ref().on('child_added', function(snapshot){

  
    var name = snapshot.val().name
    var role =  snapshot.val().role
    var startDate = snapshot.val().startDate
    var monthWorked = Math.floor(moment(moment().format()).diff(startDate,'months',true))
    // var monthWorked = moment(startDate, "MM/DD/YYYY").fromNow();
    var monthlyRate = snapshot.val().monthlyRate
    var table = $('table')
  
    console.log(name)
    var $name = $('<tr>')
    $name.html('<td>' + name + '</td><td>' + role + '</td><td>' + startDate + '</td><td>' + monthWorked + '</td>')

  

    // var role = $('<tr>')
    // role.html('<td>' + role + '</td>')

    table.append($name)


  })

  // database.ref().on("value", function(snapshot) {

   
  //   console.log(snapshot.val());

  
  // })