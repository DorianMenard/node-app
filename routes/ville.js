var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/ville', function(req, res, next) {
  res.render('ville', { title: req.body.nom_ville });
//req.querry.nom_ville
console.log("Page ville");
});

module.exports = router;
