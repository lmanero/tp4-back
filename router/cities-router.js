var express = require('express');
var router = express.Router();
var https = require('https');

router.get('/:id', function (req, res) {
  https.get('https://api.mercadolibre.com/classified_locations/states/'+req.params.id, (resp) => {
  let data = '';

  resp.on('data', (response) => {
    data += response;
  });

  resp.on('end', () => {
    var cities = JSON.parse(data).cities;
    res.end(JSON.stringify(cities));
  });
 
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

});

module.exports = router;