

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCi3j136CE3Vkm-uunG4gtJ4qlfNk6O3q0",
      authDomain: "testing-100dc.firebaseapp.com",
      databaseURL: "https://testing-100dc-default-rtdb.firebaseio.com",
      projectId: "testing-100dc",
      storageBucket: "testing-100dc.appspot.com",
      messagingSenderId: "554656015688",
      appId: "1:554656015688:web:0c39bd5725244132da3f7d"
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