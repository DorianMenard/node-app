var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ville', function(req, res, next) {
  res.render('ville', { title: req.query.nom_ville });
console.log("Page ville");
});

module.exports = router;
