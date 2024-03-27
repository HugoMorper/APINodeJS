//Achivo donde se hacen las consultas

const db = require('../../DB/mysql');//con esta constante hacemos la conexion a la base de datos, en caso de querer utilizar otra base de datos solo cambiamos la ruta del archivo.

const tabla = 'estudiantes';
const data = ['nombre','edad','grupo','promedio'];
const values = ['Andrea Lopez Jimenez',26,'3B',10];
function Create() {
    return db.Create(tabla,data,values);
}
function ReadAll() {
    return db.ReadAll(tabla);
}
function ReadAllNames() {
    return db.ReadAllNames(tabla);
}
function ReadOne(id) {
    return db.ReadOne(tabla,id);
}
function Update(id) {
    return db.Update(tabla,id);
}
function Delete(body) {
    return db.Delete(tabla,body);
}

module.exports={Create,ReadAll,ReadAllNames,ReadOne,Update,Delete}