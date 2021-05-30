
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAX4h_nLty_IZo25vq4P03FL7Jgx2szfh0",
    authDomain: "mynameismwasim.firebaseapp.com",
    projectId: "mynameismwasim",
    storageBucket: "mynameismwasim.appspot.com",
    messagingSenderId: "648074183937",
    appId: "1:648074183937:web:a875592f134475ae434700",
    measurementId: "G-T4JY5JYS09"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, subject, message);

    saveContactInfo(name, email, subject, message);

    document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}
