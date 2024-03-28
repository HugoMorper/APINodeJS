exports.success = function(req,res,mensaje,status=200){
    
    res.json(mensaje);
}

exports.error = function(req,res,mensaje='Error',status=500){
    res.status(status).send({
        error: true,
        status:status,
        body:mensaje
    });
}
