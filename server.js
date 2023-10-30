const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')


//dependecias de rutas

const bootcampsRoutes =
    require('./routes/bootcampsRoutes')
    
const coursesRoutes =
    require('./routes/coursesRoutes')


//construir el objeto app
const app = express ()

//vincular las rutas del proyecto
app.use('/bootcamps', bootcampsRoutes)
app.use('/courses', coursesRoutes)

//CONFIGURAR VARIABLES DE ENTORNO
dotenv.config(
    {path: './config/.env'}
    
)

//PRUEBA  DE URL
app.get('/prueba', function(req, res) {
    res.send('HOLA')

});


//PRUEBA  DE RUTA PARAMETRIZADA:
app.get('/prueba/:id' , function(req, res) {
    res.send(`Parametro enviado: ${req.params.id}`)

});

//TOMAR VARIABLE PUERTO DEL ENTORNO
const puerto = process.env.PUERTO




//servidor de desarrollo
app.listen(puerto , function(){
    console.log(`servidor ejecutando ...${puerto}`.bgMagenta.blue.inverse)
} )


