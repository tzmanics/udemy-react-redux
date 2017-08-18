const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  })
  
  response.on('end', () => {
    console.log(JSON.parse(data).explanation);
  })
}).on("error", (error) => {
  console.log("Error: %s", error.message);
})