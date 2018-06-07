var express = require('express');
var router = express.Router();
var https = require('https');

router.get('/', function (req, res) {
  https.get('https://api.mercadolibre.com/classified_locations/countries/BR', (resp) => {
  let data = '';

  resp.on('data', (response) => {
    data += response;
  });

  resp.on('end', () => {
    var states = JSON.parse(data).states;
    res.send(JSON.stringify(states));
  });
 
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

});

module.exports = router;