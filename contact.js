// get the form and its elements
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const textArea = document.getElementById('text');

// listen for the form submission
form.addEventListener('submit', function(event) {
  // prevent the form from submitting
  event.preventDefault();

  // check if the name input is valid
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  // check if the phone number input is valid
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneInput.value)) {
    alert('Please enter a valid phone number.');
    phoneInput.focus();
    return;
  }

  // check if the email input is valid
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // check if the message textarea is valid
  if (textArea.value.trim() === '') {
    alert('Please enter a message.');
    textArea.focus();
    return;
  }

  // if all inputs are valid, submit the form
  form.submit();
});
