let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
        // wrap carousel by using first child
        next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//
// Initialize Firebase(2)
var config = {
  apiKey: "AIzaSyBSvlZLyeTOJtPpztli_We2CvPWoEjcQUs",
  authDomain: "doubleday-expressions.firebaseapp.com",
  databaseURL: "https://doubleday-expressions-default-rtdb.firebaseio.com",
  projectId: "doubleday-expressions",
  storageBucket: "doubleday-expressions.appspot.com",
  messagingSenderId: "375568923522",
  appId: "1:375568923522:web:507995b4acdd76a789ad9b",
  measurementId: "G-051VPKKMG7"
};
firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('contactForm')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let fname = document.querySelector('#fname').value;
  let lname = document.querySelector('#lname').value;
  let email = document.querySelector('#email').value;
  let company = document.querySelector('#company').value;
  let conNum = document.querySelector('#conNum').value;
 

  //send message values
  sendMessage(fname, lname, email, company, conNum);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //Form Reset After Submission(7)
  document.getElementById('contactForm').reset();
}

//Send Message to Firebase(4)

function sendMessage(fname, lname, email, company, conNum) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    fname: fname, 
    lname: lname, 
    email: email, 
    company: company, 
    conNum: conNum
  });
}