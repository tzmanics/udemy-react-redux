const superagent = require('superagent');

superagent.get('https://api.nasa.gov/planetary/apod')
.query({ api_key: 'DEMO_KEY', date: '2017-08-02' })
.end((error, response) => {
  if (err) return console.log(error);
  console.log(response.body.url);
  console.log(response.body.explanation);
});