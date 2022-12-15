var express = require('express');
var router = express.Router();

/* GET greeting */
router.get('/', function(req, res, next) {
  res.send(
    { "greeting": "Hey, world!" }
  );
});

module.exports = router;
