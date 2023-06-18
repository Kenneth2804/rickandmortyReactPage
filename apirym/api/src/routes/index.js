const {Router} = require("express");

const router = Router();

const getall = require("./GetAll.js");

router.use("/getAll", getall)


module.exports = router;