// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBKcBtd0Mnmrc4PhQXDy9zPNbVco8ZjhE4",
    authDomain: "rev-tech-contact-form.firebaseapp.com",
    projectId: "rev-tech-contact-form",
    storageBucket: "rev-tech-contact-form.appspot.com",
    messagingSenderId: "13283879148",
    appId: "1:13283879148:web:97a88e8a4713234bfaddc9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");
// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);
     // Show alert
 
  document.querySelector('.alert').style.display = 'block';
 
  

  // Hide alert after 3 seconds
  setTimeout(function(){ 

    document.querySelector('.alert').style.display = 'none';
  },10000);


  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
