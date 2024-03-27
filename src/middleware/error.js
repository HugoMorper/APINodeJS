//funcion que recibe un error y lo envia
function error(messaje,code){
    let err = new Error(messaje);
    if (code) {
        err.statusCode = code;
    }
    return err;
}

module.exports = error;