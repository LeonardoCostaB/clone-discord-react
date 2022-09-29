import { gql } from "apollo-server-express";

export const subscriberTypeDefs = gql`
   type Subscriber {
      id: ID!
      name: String!
      email: String!
   }

   extend type Query {
      subscribers: [Subscriber]
   }
`;

export const subscriberResolvers = {
   Query: {
      subscribers: () => []
   }
}
