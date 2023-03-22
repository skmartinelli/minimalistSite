// import {sanitize} from "DOMPurify-main/dist/purify.js";


const showAlert = document.getElementById('showAlert');
const alert = document.getElementById('alert');


const showConfirm = document.getElementById('showConfirm');
const confirm =  document.getElementById('confirm');
const outputBox = document.querySelector('output');




// ALERT
showAlert.addEventListener('click', () => {
    alert.showModal();
});

// CONFIRM
showConfirm.addEventListener('click', () => {
    confirm.showModal();
});

confirm.addEventListener('close', () => {
    outputBox.value = `Confirm result : ${confirm.returnValue}`;
  });


// Prompt done in html file because I can't figure out DOMpurify in the js file. 
