  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAAkYdvOiRzt59TeYU1nTn2h3CymxUyKro",
    authDomain: "contact-form-bad0d.firebaseapp.com",
    databaseURL: "https://contact-form-bad0d-default-rtdb.firebaseio.com",
    projectId: "contact-form-bad0d",
    storageBucket: "contact-form-bad0d.appspot.com",
    messagingSenderId: "36932777913",
    appId: "1:36932777913:web:d2a3bfc62f9e194f14a868"
  };

    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //reference your database
var contactFormDB = firebase.database().ref("contactform");
document.getElementById('contactform').addEventListener('submit',submitform);
function submitform(e){
    e.preventDefault();

    var name = getElementVal('name');
    var mobile = getElementVal('mobile');
    var emailid = getElementVal('emailid');
    var message = getElementVal('message');

    saveMessages(name, mobile, emailid, message);

    //enable alert
    document.querySelector(".alert").style.display = "block";

    //remove alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //reset form
    document.getElementById("contactform").reset();
}

const saveMessages = (name, mobile, emailid, message) => {
    var newcontactform = contactFormDB.push();

    newcontactform.set([
        name = name,
        mobile = mobile,
        emailid = emailid,
        message = message,
    ]);
}
const getElementVal = (id) =>{
    return document.getElementById(id).value;
}