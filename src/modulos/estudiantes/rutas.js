//acciones dentro de las rutas

const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

//rutas
router.post('/',Create);
router.get('/',ReadAll);
router.get('/nombres',ReadAllNames);
router.get('/:id',ReadOne);
router.put('/',Delete);

//funciones
async function Create(req,res,next){//res es la accion que se ejecuta cuando el path es invocado
    try{
        const items = await controlador.Create(req.body);
        if(req.body.id == 0){
            mensaje = 'Alumno guardado con exito';
        }else{
            mensaje = 'Alumno actualizado con exito';
        }
        respuesta.success(req,res,mensaje,201)
    }catch(err){
        next(err);//?
    }
};
async function ReadAll(req,res,next){//res es la accion que se ejecuta cuando el path es invocado
    try{
        const items = await controlador.ReadAll();
        respuesta.success(req,res,items,200)
    }catch(err){
        next(err);//?
    }
};

async function ReadAllNames(req,res,next){//res es la accion que se ejecuta cuando el path es invocado
    try{
        const items = await controlador.ReadAllNames();
        console.log("Mandando solo nombres");
        respuesta.success(req,res,items,200)
    }catch(err){
        next(err);
    }
};

async function ReadOne(req,res,next){//res es la accion que se ejecuta cuando el path es invocado
    try{
        const items = await controlador.ReadOne(req.params.id);
        respuesta.success(req,res,items,200)
    }catch(err){
        next(err);
    }
};

async function Update(){

}
async function Delete(req,res,next){//res es la accion que se ejecuta cuando el path es invocado
    try{
        const items = await controlador.Delete(req.body);
        respuesta.success(req,res,'Alumno dado de baja con exito',200)
    }catch(err){
        next(err);
    }
    
};

module.exports = router;//