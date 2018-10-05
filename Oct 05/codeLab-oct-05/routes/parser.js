var express = require('express');
var sample_data = require('/Users/kat/Desktop/codeLab-basic-template/Oct 05/sample_data.json');
var people_data = require('/Users/kat/Desktop/codeLab-basic-template/Oct 05/people.json');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('parser', { data: sample_data, people: people_data });
});

module.exports = router;
