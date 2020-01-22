import express from 'express';


export default class App {
    public app: express.Application;

    constructor() {
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
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
module.exports = app;
