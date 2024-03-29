const express = require("express");
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    //Todo tracks.js [tracks, js]
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) // Todo index, tracks
    if(name !== 'index'){
        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = router