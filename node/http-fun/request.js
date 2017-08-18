 const request = require('request');

 request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true}, (error, response, body) => {
   if (error) return console.log(error);
   console.log(body.url);
   console.log(body.explanation);
 });