const {Router, response} = require("express")
const axios = require("axios");
const {Episodes, Characters}  = require ('../db.js');

const router = Router();

router.get("/", (req,res) =>{
    try {
        axios.get("https://rickandmortyapi.com/api/episode").then((response) =>{
            let aux = response.data.results.map((ep) =>{
                const obj ={
                    id: ep.id,
                    name: ep.name
                };
                return obj
            });
    
            Episodes.bulkCreate(aux)
            res.send(aux)
        })

}

catch (error) {
console.log(error)
}
})



module.exports = router;