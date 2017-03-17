'use strict';

let sendURL = document.querySelector('#sendURL');
let emailAddress = document.querySelector('#emailAddress');


sendURL.addEventListener("click", ()=>{
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:5000/getURL');
  xhr.setRequestHeader('Content-Type', 'application/json');
  let DataFromTheClient = {
    "case":emailAddress.value
  };
  console.log(DataFromTheClient);
  xhr.send(JSON.stringify(DataFromTheClient));
});
