import express from "express";


export default class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.routes();
    }

    private routes():void{
        const router = express.Router();
        // TODO add routes
        // TODO Set up error handling and exception handling here
        this.app.use('/', router);
    }

}
const { app } = new App();
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Listening on port "+ port);
})

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: { syscall: string; code: any; }) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

module.exports = app;