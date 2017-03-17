'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
//  JS files
let shortCode = require('./shortCode.js');
let URL_validation = require('./URL_validation.js');

// ***** CREATE the MYSQL Connection *****
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "shorturl"
});

// ***** CHECK the MYSQL Connection *****
con.connect(function(err){
if(err){
console.log("Error connecting to Db", err);
return;
}
console.log("Connection established");
});

app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/getURL', function (req, res) {
  let Client_URL = req.body.case;
  // it should be false
  console.log(URL_validation(Client_URL));
  // always same ShortCode  ??????????
  let URL_short_Code = shortCode;
  console.log(URL_short_Code);
  // let URL_short_Code = Math.random().toString(36).substr(2, 8);
  let data = {'Email': Client_URL, 'ShortCode': URL_short_Code};

  con.query(
    'Insert INTO shorturl SET ?', data, function(err,res){
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
}
  );

})

app.listen(5000);
