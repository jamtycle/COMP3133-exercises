var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.get("/", function (_req, _res, _next) {
    _res.send("respond with a resource");
});

router.post("/", function (_req, _res, _next) {
    console.log(`First Name: ${_req.body.firstName}`);
    console.log(`Last Name: ${_req.body.lastName}`);
    _res.send("Post received!");
});

router.use(bodyParser.urlencoded({ extended: true }));

module.exports = router;
