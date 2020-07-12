const { fileLoader, mergeTypes } = require("merge-graphql-schemas");
const path = require("path");

const typesArray = fileLoader(path.join(__dirname, "./**/*.graphql.*"));

exports.typeDefs = mergeTypes(typesArray, { all: true });
