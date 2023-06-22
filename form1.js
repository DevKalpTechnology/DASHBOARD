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
let contactFormDB = firebase.database().ref("contact-form");
//listen for submit
document.querySelector('.contact-form').addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();
    //   Get input Values
    let name = document.querySelector(".name").value;
    let mobile = document.querySelector(".mobile").value;
    let emailid = document.querySelector(".emailid").value;
    let message = document.querySelector(".message").value;
    console.log(name, mobile,emailid, message);

    saveMessages(name, mobile, emailid, message);
    //enable alert
    document.querySelector(".alert").style.display = "block";

    //remove alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 4000);

    //reset form
    document.querySelector(".contact-form").reset();
}

function saveMessages(name, mobile, emailid, message) {
    let newcontactform = contactFormDB.push();

    newcontactform.set({
        name: name,
        mobile: mobile,
        emailid: emailid,
        message: message,
    });
}
