import express from "express";

import router from "./router";

class Server {
   private app = express();

   constructor() {
      this.middlewares();
      this.routes();
      this.port();
   };

   middlewares() {
      this.app.use(express.json());
   };

   routes() {
      this.app.use(router)
   };

   port() {
      // const port = 5000 | process.env.PORT;

      this.app.listen(5000, () => console.log("Server is runnig in http://localhost:5000"))
   };
};

new Server()