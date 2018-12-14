'use strict' 
const express = require('express'), 
app = express()

//Configurar el servidor
app.set('port', process.env.PORT || 80)  

app.set(express.static('alfredo. aqui va la direccion de la carpeta que contiene los archivos')) 
//Hechar a correr el servidor
app.listen(app.get('port'),()=>{
    console.log(`API RUNNING ON http://localhost:${app.get('port')}`)
})