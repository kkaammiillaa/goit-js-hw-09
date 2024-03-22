const form = document.querySelector('.feedback-form');
const email = document.querySelector('.email');
const message = document.querySelector('.message');
const key = 'feedback-form-state';

if (localStorage.getItem(key)) {
  setPreviousValue();
}
const valueObj = JSON.parse(localStorage.getItem(key)) || {};

form.addEventListener('input', saveValue);
function saveValue(event) {
  const value = event.target.value;
  valueObj[event.target.name] = value.trim();
  localStorage.setItem(key, JSON.stringify(valueObj));
}

function setPreviousValue() {
  const previousValues = JSON.parse(localStorage.getItem(key));
  const previousEmail = previousValues.email;
  const previousMessage = previousValues.message;

  email.value = previousEmail || '';
  message.value = previousMessage || '';
}

form.addEventListener('submit', formSubmit);
function formSubmit(event) {
  if (email.value.trim() && message.value.trim()) {
    event.preventDefault();
    console.log(valueObj);
    event.currentTarget.reset();
    localStorage.removeItem(key);
  } else {
    alert('You should fill in the form');
  }
}
