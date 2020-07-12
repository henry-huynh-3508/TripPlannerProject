const { ApolloError } = require("apollo-server-express");
const resolverFunctions = {
  Query: {
    async City_getCityMetadata(_, args, context) {
      try {
        return { test: 1 };
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    async City_getCityInfo(_, args, context) {
      try {
        return {
          test: 2,
        };
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  },
};

exports.resolverFunctions;
