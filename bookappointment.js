// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAynpkdQM2JMzgDLhvt4o-YHV4gThfMXTA",
    authDomain: "contactform-2001.firebaseapp.com",
    databaseURL: "https://contactform-2001-default-rtdb.firebaseio.com",
    projectId: "contactform-2001",
    storageBucket: "contactform-2001.appspot.com",
    messagingSenderId: "856373342039",
    appId: "1:856373342039:web:b28932c8551f8ae4aa1812"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//reference your database
// let appointmentFormDB = firebase.database().ref("child-appointment-form"); 


//listen for submit
document.querySelector('.appointment-form').addEventListener('submit',createDatabase);

function createDatabase() {
    var selectField = document.getElementById("department");
    var selectedValue = selectField.value;

    // Create a new Firebase database based on the selected value
    let appointmentFormDB = firebase.database().ref(selectedValue);
    console.log("new database is :" + appointmentFormDB);

    submitform(e);

}

function submitform(e) {
    e.preventDefault();
    //   Get input Values
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let gender = document.getElementById("gender").value;

    console.log(name, phone, email, department,date, time, gender);

    saveAppointment(name, phone, email, department,date, time, gender);

    //enable alert
    document.querySelector(".alert").style.display = "block";

    //remove alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 4000);

    //reset form
    document.querySelector(".appointment-form").reset();
}

function saveAppointment(name, phone, email, department,date, time, gender) {
    let newAppointmentForm = appointmentFormDB.push();

    newAppointmentForm.set({
        name : name,
        phone : phone,
        email : email,
        department : department,
        date : date,
        time : time,
        gender : gender

    });
}
