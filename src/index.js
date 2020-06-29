var express = require("express");
var router = express.Router();

const { getNames, getRegions } = require("./controller/uinameController");

router.post("/getnames", getNames);
router.get("/getregions", getRegions);

module.exports = router;
