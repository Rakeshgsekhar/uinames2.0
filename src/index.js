var express = require("express");
var router = express.Router();

// const { signedOut, signUp } = require("../controllers/auth");
const { getNames, getRegions } = require("./controller/uinameController");

router.post("/getnames", getNames);
router.get("/getregions", getRegions);

//router.post("/signup", signUp);

module.exports = router;
