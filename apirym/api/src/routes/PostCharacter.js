const {Router} = require("express")
const axios = require("axios");
const {Episodes, Characters}  = require ('../db.js');

const router = Router();

router.post("/", async(req,res) =>{
    const {name, species, origen, image, episodes} = req.body;
    if(!name || !origen || !image) res.status(404).json({msg: "Faltan datos"});

    try {
        
        const obj ={name, species, origen, image}
        const nuevoObj =  await Characters.create(obj);

        nuevoObj.addEpisode(episodes);
res.send(nuevoObj)
    } catch (error) {
        console.log(error);
    }


})

module.exports = router;