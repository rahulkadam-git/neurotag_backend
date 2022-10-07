const router = require("express").Router();
const neurotag = require("../controller/neurotag.controller");

router.get("/data/customer", neurotag.getAllData);
router.get("/data/sendalldata", neurotag.postAllData);

module.exports = router;
