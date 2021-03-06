import { ApolloError, ValidationError } from "apollo-server-express";
import { WeatherAPI } from "../data/weatherforecast";
import { convertCityIDtoCoordinates } from "./utils/cityIDConverter";
const resolverFunctions = {
  Query: {
    async Weather_getCurrentWeatherForecast(_: any, args: any, context: any) {
      try {
        const input: any = JSON.parse(JSON.stringify(args));
        const weather = new WeatherAPI();
        return await weather.getWeatherForecast(
          input.coordinate.lat,
          input.coordinate.lng
        );
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    async Weather_getCurrentWeatherForecastbyCityID(
      _: any,
      args: any,
      context: any
    ) {
      try {
        const input: any = JSON.parse(JSON.stringify(args));
        const coordinates = convertCityIDtoCoordinates(input.cityID);
        const weather = new WeatherAPI();
        return await weather.getWeatherForecast(
          coordinates.lat,
          coordinates.lng
        );
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    async Weather_getWeatherForecastInAdvance(_: any, args: any, context: any) {
      try {
        const input: any = JSON.parse(JSON.stringify(args));
        const weather = new WeatherAPI();
        return await weather.getWeatherForecastInAdvance(
          input.coordinate.lat,
          input.coordinate.lng,
          input.howmanydays
        );
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    async Weather_getWeatherForecastInAdvancebyCityID(
      _: any,
      args: any,
      context: any
    ) {
      try {
        const input: any = JSON.parse(JSON.stringify(args));
        const coordinates = convertCityIDtoCoordinates(input.cityID);
        const weather = new WeatherAPI();
        return await weather.getWeatherForecastInAdvance(
          coordinates.lat,
          coordinates.lng,
          input.howmanydays
        );
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  },
};

export default resolverFunctions;
