(function () {
 var $form = document.querySelector('#contact-form');
 var $emailInput = document.querySelector('#contact-email');
 var $numberInput = document.querySelector('#contact-tel');

 function validateEmail() {
  var value = $emailInput.value;

  if (!value) {
   showErrorMessage($emailInput, 'Email is a required field.');
   return false;
  }

  if (value.indexOf('@') === -1) {
   showErrorMessage($emailInput, 'You must enter a valid email address.');
   return false;
  }

  showErrorMessage($emailInput, null);
  return true;
 }

 function validateNumber() {
  var value = $numberInput.value;

  if (!value) {
   showErrorMessage($numberInput, 'Telephone number is a required field.');
   return false;
  }

  if (value.length < 11) {
   showErrorMessage($numberInput, 'Phone number should be 11 digits in length.');
   return false;
  }

  showErrorMessage($numberInput, null);
  return true;
 }

 function validateForm() {
  var isValidEmail = validateEmail();
  var isValidNumber = validateNumber();
  return isValidEmail && isValidNumber;
 }

 function showErrorMessage($input, message) {
  var $container = $input.parentElement;;
  // Remove an existing error
  var error = $container.querySelector('.error-message');
  if (error) {
   $container.removeChild(error);
  }

  // Now add the error if the message isn't empty
  if (message) {
   var error = document.createElement('div');
   error.classList.add('error-message');
   error.innerText = message;
   $container.appendChild(error);
  }
 }

 $form.addEventListener('submit', (e) => {
  e.preventDefault(); // Do not submit to the server
  if (validateEmail()) {
   alert('Success');
  }
 });

 $emailInput.addEventListener('input', validateEmail);
 $emailInput.addEventListener('input', validateNumber);
})();
