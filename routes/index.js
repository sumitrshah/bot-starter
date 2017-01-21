var express = require('express');
var router = express.Router();


if(process.env.PORT === "5000") {
	console.log("Running app locally.");
} else {
	console.log("Running app on server.");
}



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
