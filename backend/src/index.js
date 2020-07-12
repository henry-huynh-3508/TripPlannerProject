const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const {
  makeExecutableSchema,
  SchemaDirectiveVisitor,
} = require("graphql-tools");
const { typeDefs } = require("./typedefs");
const { resolvers } = require("./resolvers");

const app = express();
const apolloServer = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  }),
  // Enable graphql gui
  introspection: true,
  playground: true,
  context: async ({ req }) => {
    return { headers: req.headers };
  },
});

apolloServer.applyMiddleware({ app, path: "/", cors: true });

app.listen({ port: 8080 }, () =>
  console.log(`🚀 Server ready at http://localhost:8080`)
);
