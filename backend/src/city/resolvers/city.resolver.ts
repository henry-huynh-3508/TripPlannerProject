import { ApolloError, ValidationError } from "apollo-server-express";
import { CityData } from "../data/cityData";
const resolverFunctions = {
  Query: {
    async City_getCityMetadata(_: any, args: any, context: any) {
      try {
        const data = new CityData();
        const metadata = data.getCityMetadata();
        return metadata;
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    async City_getCityInfo(_: any, args: any, context: any) {
      try {
        const input: any = JSON.parse(JSON.stringify(args));
        const data = new CityData();
        const citydata = data.getCityData(input.ID);
        return citydata;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  },
};

export default resolverFunctions;
