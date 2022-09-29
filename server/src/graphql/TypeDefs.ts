import { gql } from "apollo-server-express";
import { subscriberTypeDefs } from "./Subscriber";

const typeDefs = gql`
   type Query {
      _root: String
   }

   ${subscriberTypeDefs}
`;

export default typeDefs;
