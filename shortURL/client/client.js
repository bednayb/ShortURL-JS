'use strict';

let sendURL = document.querySelector('#sendURL');
let getURL = document.querySelector('#getURL');
let emailAddress = document.querySelector('#emailAddress');
let shortCode = document.querySelector('#shortCode');

// function google(url){
//     console.log(url);
//     window.open("http://index.hu");
//     window.open(url);
// }

// POST URL
sendURL.addEventListener("click", ()=>{
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:5000/sendURL');
  xhr.setRequestHeader('Content-Type', 'application/json');
  let DataFromTheClient = {
    "case":emailAddress.value
  };
  console.log(DataFromTheClient);
  xhr.send(JSON.stringify(DataFromTheClient));
});

// POST ShortCode
getURL.addEventListener("click", ()=>{
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:5000/getURL');
  xhr.setRequestHeader('Content-Type', 'application/json');
  let DataFromTheClient = {
    "case":shortCode.value
  };
  console.log(DataFromTheClient);
  xhr.send(JSON.stringify(DataFromTheClient));

//  GET URL
xhr.onreadystatechange = function () {
   if(xhr.readyState === XMLHttpRequest.DONE) {

    //  cut the two " (first and last character)
    var result = xhr.responseText.slice(1,xhr.responseText.length - 1 );
    // open the URL in a new window
    window.open(result);
   }
 };
});
