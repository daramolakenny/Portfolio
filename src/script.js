document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

const alertMessageA = document.querySelector('alert-message-a');
const alertMessageB = document.querySelector('alert-message-b');
const alertMessageC = document.querySelector('alert-message-c');
var userName = document.getElementById('name');
var password = document.getElementById('password');
var messageBox = document.getElementById('message-box');
var statusMessage = document.getElementById('status-message');

function submit(){
  // function handleSubmit() {
    
    if(userName === ''){
      alertMessageA = 'Name is required';
      console.log(alertMessageA);
    }
    else if(password === ''){
      alertMessageB = 'Password is required';
      console.log(alertMessageB);
    }
    else if(messageBox === ''){
      alertMessageC = 'Please enter your message';
      console.log(alertMessageC);
    }
    else{
      if(statusMessage === 'Successfull'){
        statusMessage.innerText = 'Successfull';
        console.log(statusMessage);
      }
      else{
        statusMessage.innerText = 'Failed';
        console.error(statusMessage);
      }
    }
  // }
}
