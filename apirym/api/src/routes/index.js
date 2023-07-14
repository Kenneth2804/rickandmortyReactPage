const {Router} = require("express");

const router = Router();

const getall = require("./GetAll.js");
const postCharacter = require("./PostCharacter.js");
const getEpisodes = require("./Charge-episode.js");


router.use("/getAll", getall)
router.use("/create", postCharacter)
router.use("/episodes", getEpisodes)


module.exports = router;