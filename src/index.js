var express = require("express");
var router = express.Router();

// const { signedOut, signUp } = require("../controllers/auth");
const { getNames } = require("./controller/uinameController");

router.post("/getnames", getNames);

//router.post("/signup", signUp);

module.exports = router;
