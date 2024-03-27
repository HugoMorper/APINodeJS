//inicializa server
const app = require('./app');

app.listen(app.get('port'), ()=>{//listen() inicia la app web
    console.log("server escuchando en el puerto: "+app.get("port"));
});