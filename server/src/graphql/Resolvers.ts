import { subscriberResolvers } from "./Subscriber";

const resolvers = {
   ...subscriberResolvers,

   Query: {
      ...subscriberResolvers.Query
   }
};

export default resolvers;
