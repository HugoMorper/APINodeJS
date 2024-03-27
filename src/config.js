require('dotenv').config();
module.exports = {
    app:{
        port: process.env.PORT || 4000, //si no existen variables de entorno con un puerto usable, usa el 4000
    },
    mysql:{
        host: process.env.MSQL_HOST || 'localHost',
        user: process.env.MSQL_USER || 'root',
        pass: process.env.MSQL_PASSWORD || '',
        db: process.env.MSQL_DB || 'estudiantes'
    }

}