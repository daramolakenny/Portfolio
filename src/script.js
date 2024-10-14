document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

var statusMessage = document.getElementById('status-message');

function handleSubmit(){
  if(alertMessageA && alertMessageB && alertMessageC === " ") {
    statusMessage.style.display = 'block';
    statusMessage.textContent = "Message Failed.";
    statusMessage.style.color = "red";
  }
  else{
    statusMessage.style.display = 'block';
    statusMessage.textContent = "Successfull.";
    statusMessage.style.color = "red";
  }
}  
  // function handleSubmit() {
    
    // if(userName === ''){
    //   // userName = 'Name is required';
    //   console.log(alertMessageA);
    // }
    // else if(password === ''){
    //   password = 'Password is required';
    //   console.log(alertMessageB);
    // }
    // else if(messageBox === ''){
    //   messageBox = 'Please what do you have for me?';
    //   console.log(alertMessageC);
    // }
    // else{
    //   if(statusMessage === 'Successfull'){
    //     statusMessage.innerText = 'Successfull';
    //     console.log(statusMessage);
    //   }
    //   else{
    //     statusMessage.innerText = 'Failed';
    //     console.error(statusMessage);
    //   }
    // }
// }
