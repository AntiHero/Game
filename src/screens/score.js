// import $ from 'jquery';
const fetch = require("node-fetch");
const mongoose = require('mongoose');

let express = require("express");
let app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});



app.get("/url", (req, res, next) => {
  console.log(req.originalUrl)
  res.json('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json');
 });
 
//  $.getJSON('components/tasks/eng-ru/vocab-easy.json', function(data) { 
//   return data;
// }).then(data => console.log(data));
// static getInitialProps ({ req }) {
//   const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
//   const response = await fetch(baseUrl + '/posts');
// }
// fetch('/src/score.json').then(res => res.json()).then(data => console.log(data));

