const respuesta = require('./respuestas');

function errors(err,req,res,next) {
    console.error('[error]',err);
    const messaje = err.messaje || 'Error interno';
    const status = err.statusCode || 500;

    respuesta.error(req, res, messaje, status);
}

module.exports = errors;