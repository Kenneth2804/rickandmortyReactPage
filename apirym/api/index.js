const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require("axios");
const {Episodes, Characters}  = require ('../api/src/db.js');


/* function preCharge(){
    axios.get("https://rickandmortyapi.com/api/episode").then((response) =>{
        let aux = response.data.results.map((ep) =>{
            const obj ={
                id: ep.id,
                name: ep.name
            };
            return obj
        });

        Episodes.bulkCreate(aux)
    })




} */
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {

  server.listen(process.env.PORT || 3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});