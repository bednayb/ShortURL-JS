'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
//  extra files
let shortCode = require('./shortCode.js');
let isRealURL = require('valid-url');


app.use(bodyParser.json());
app.use(express.static('client'));

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


// SAVE new element
app.post('/sendURL', (req, res)=> {
  let Client_URL = req.body.case;
  if (isRealURL.isUri(Client_URL)){
      //  console.log('Looks like an URI');
    let URL_short_Code = shortCode();
    let data = {'Email': Client_URL, 'ShortCode': URL_short_Code};

    con.query(
      'Insert INTO shorturl SET ?', data, function(err,res){
    if(err) throw err;
    console.log('Last insert ID:', res.insertId);
      }
    );
  }else {
      console.log('Not a URL');
  }
});

// Find URL from shortCode
app.post('/getURL', (req, res)=> {

  let Client_ShortCode = req.body.case;

  //database
    let URL_to_client;

    con.query(
      'SELECT Email FROM shorturl WHERE ShortCode = ?' , Client_ShortCode ,function alma(err,res){
      if(err) throw err;
      console.log(res[0].Email);
      URL_to_client = res[0].Email;
    })
    // in the future change to await
    setTimeout(function(){
      console.log(URL_to_client);
      res.status(200).send(JSON.stringify(URL_to_client));
    },50)

});






app.listen(5000);
