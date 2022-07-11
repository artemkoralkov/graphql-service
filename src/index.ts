import { ApolloServer } from "apollo-server";
import "dotenv/config";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import dataSources from "./dataSources";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => dataSources,
  context: async ({ req }) => ({
    token: req.headers.authorization || "",
  }),
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
