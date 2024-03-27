//Archivo que contiene las funciones CRUD y coneccion de datos
const mysql = require('mysql');
const config = require('../config');


//variable que va a tener los datos necesarios para hacer la conexion, estos datos son traidos desde el archivo config.js 
const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.db
}

let conexion;//variable que contiene la conexion a la bd y desde la cual se pueden hacer consultas

function conexionDB(){
    conexion = mysql.createConnection(dbConfig);//hace la conexion con la BD usando los datos de la constante dbconfig
    conexion.connect((err)=>{
        if(err){
            console.log('[Error: ]',err);
            setTimeout(conexionDB,200);//vuelve a intentar conectarse 
        }else{
            console.log(`Conexion con DataBase: "${dbConfig.database}" exitosa :3`);
        }
    });

    //Si se pierde la coneccion con la bd vuelve a usar la funcion de conexion
    conexion.on('error',err=>{
        console.log('[Error: ]',err);
        if (err.code==='PROTOCOL_CONECTION_LOST') {
            conexionDB();
        }else{
            throw err;//Lanza un error si es que es otro problema diferente a solo perder la conexion
        }
    })
    
}

conexionDB();

function insertar(tabla,data){
    return new Promise((resolve,reject)=>{
        conexion.query(`INSERT INTO ${tabla} SET ?`,data,(error, result)=>{
            return error ? reject(error):resolve(result);
        })
    });
}
function actualizar(tabla,data){
    return new Promise((resolve,reject)=>{
        conexion.query(`UPDATE ${tabla} SET ? WHERE id = ?`,[data,data.id],(error, result)=>{
            return error ? reject(error):resolve(result);
        })
    });
}

function Create(tabla,data){
        if(data && data.id == 0)
        {
            return insertar(tabla,data);
        }else{
            return actualizar(tabla,data);
        }
}

function ReadAll(tabla){
    return new Promise((resolve,reject)=>{
        conexion.query(`SELECT * FROM ${tabla}`,(error, result)=>{
            return error ? reject(error):resolve(result);
        })
    });

}
function ReadAllNames(tabla){//tratar de hacer en una sola funcion (mergear con ReadAll())
    return new Promise((resolve,reject)=>{
        conexion.query(`SELECT id, nombre FROM ${tabla}`,(error, result)=>{
            return error ? reject(error):resolve(result);
        })
    });

}

function ReadOne(tabla,id){//Vamos a usar esta funcion para desplegar toda la info del alumno cuando se seleccione su nombre en la app movil
    return new Promise((resolve,reject)=>{
        conexion.query(`SELECT * FROM ${tabla} WHERE id = ${id}`,(error,result)=>{
            return error ? reject(error):resolve(result);
        })
    });

}



function Update(tabla,id){
    return new Promise((resolve,reject)=>{
        conexion.query(``)
    });

}

function Delete(tabla,data){
    return new Promise((resolve,reject)=>{
        conexion.query(`DELETE FROM ${tabla} WHERE id = ?`, data.id,(error, result)=>{
            return error ? reject(error):resolve(result);
        })
    });
}

module.exports={Create,ReadAll,ReadAllNames,ReadOne,Update,Delete}