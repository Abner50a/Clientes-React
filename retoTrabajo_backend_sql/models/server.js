const express = require('express')
const app = express()


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usuariosRoutePath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de app

        this.routes();
    }

    middlewares() {
       

        

        // Lectura y paseo del body

        this.app.use(express.json());

 
    }


    //vistas
    routes() {
        
        this.app.use( this.usuariosRoutePath, require('../routes/usuarios'));

    }

    listen() { 
        this.app.listen(this.port, () => {
            console.log('servidor conectado', process.env.PORT);
        });
    }

    
}


module.exports = Server;