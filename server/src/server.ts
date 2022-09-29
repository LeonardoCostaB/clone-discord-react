import express from "express";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./graphql/TypeDefs";
import resolvers from "./graphql/Resolvers";

class Server {
   private app = express();
   private server = new ApolloServer({
      typeDefs,
      resolvers
   })

   constructor() {
      this.middlewares();
      this.apolloServer();
      this.port();
   };

   async apolloServer() {
      await this.server.start();

      this.server.applyMiddleware({
         app: this.app,
         // cors: {
         //    origin: "http:localhost:3000"
         // },
         bodyParserConfig: true
      })
   };

   middlewares() {
      this.app.use(express.json());
   };

   port() {
      // const port = 5000 | process.env.PORT;

      this.app.listen(5000, () => console.log("Server is runnig in http://localhost:5000"))
   };
};

new Server();
