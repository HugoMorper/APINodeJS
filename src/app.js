const express = require('express');//require es similar a import ?
const morgan = require('morgan');// nos permite ver las peticiones que se hacen a la api
const config = require('./config');

const clientes = require('./modulos/estudiantes/rutas');
const error = require('./red/errors');
const app = express();
//middleware 
app.use(morgan('dev'));
app.use(express.json());//permite leer json
app.use(express.urlencoded({extended:true}));//investigar que permite
//configuracion
app.set('port', config.app.port)

//rutas
app.use('/api/estudiantes',clientes)
app.use(error)

module.exports = app;