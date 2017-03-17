'use strict';

let checkURL = function(str) {
  let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}


// let result = checkURL('httsdfsps://www.igotitworking.com/problem/view/69/');
// let result2 = checkURL('https://www.igotitwdsfgdfsorking.com/problem/view/69/');
//
// console.log(result);
// console.log(result2);

module.exports = checkURL;






//
