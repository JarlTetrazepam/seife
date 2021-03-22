var messagesRef = firebase.database().ref('messages');

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  var name = getInputVal("fullName");
  var email = getInputVal("email");
  var subject = getInputVal("subject");

  saveMessage(name, email, subject)

  document.getElementById("formAlertWrapper").classList.add("active");

  setTimeout(function() {
    document.getElementById("formAlertWrapper").classList.remove("active");
  }, 4500);

  document.getElementById("contactForm").reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, subject) {
  var newMessageRef = messagesRef.push();

  newMessageRef.set({
    name: name,
    email: email,
    subject: subject
  });
}
