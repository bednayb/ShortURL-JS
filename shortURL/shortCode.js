'use strict';

let short_Code = function(){
  return Math.random().toString(36).substr(2, 8)
}

module.exports = short_Code();
