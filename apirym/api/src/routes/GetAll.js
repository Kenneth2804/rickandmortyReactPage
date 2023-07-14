const {Router} = require("express")
const axios = require("axios");
const {Episodes, Characters}  = require ('../db.js');

const router = Router();

router.get("/", async(req, res) =>{

    try {
        
        const api = await axios.get("https://rickandmortyapi.com/api/character");
      
        const formatear = api.data.results.map(personaje =>{
            const obj ={

                name: personaje.name,
                image: personaje.image,
                status: personaje.status,
                location: personaje.location.name,
                species: personaje.species,
                origen: personaje.origin.name
            }
            return obj
        });

        const db = await Characters.findAll({include: [{model: Episodes}]});
        const suma = [...formatear,... db];

        return res.status(200).send(suma)

    } catch (error) {
        return res.status(404).send({message: error})
    }
})

module.exports = router;