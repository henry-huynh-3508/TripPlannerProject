import { createTestClient } from "apollo-server-integration-testing";
import { apolloServer } from "../utils";

const MOCK_GET_CURRENT_WEATHER_FORECAST = `
query testCurrentWeatherForecast($coordinate: WeatherCoordinate) {
  Weather_getCurrentWeatherForecast(coordinate: $coordinate) {
    DayOfWeek
    Temperature
    Description
  }
}
`;
const MOCK_GET_WEATHER_FORECAST_IN_ADVANCE = `
query test7dayWeatherForecast($coordinate: WeatherCoordinate) {
  Weather_getWeatherForecastInAdvance(coordinate: $coordinate) {
    DayOfWeek
    MinTemperature
    MaxTemperature
    Description
  }
}
`;

describe("Test Weather Queries", () => {
  it("gets the current weather forecast", async () => {
    // create an instance of ApolloServer for testing
    const { query, mutate } = createTestClient({
      apolloServer,
    });
    // test correctness of metadata payload
    const result: any = await query(MOCK_GET_CURRENT_WEATHER_FORECAST, {
      variables: { coordinate: { lat: 53.55, lng: -113.47 } },
    });
    const weaterforecast = result.data.Weather_getCurrentWeatherForecast;
    expect(weaterforecast.DayOfWeek).toBeDefined();
    expect(weaterforecast.Temperature).toBeDefined();
    expect(weaterforecast.Description).toBeDefined();
  });

  it("gets the weather forecast in advance", async () => {
    // create an instance of ApolloServer for testing
    const { query, mutate } = createTestClient({
      apolloServer,
    });
    // test correctness of cityinfo payload
    const result: any = await query(MOCK_GET_WEATHER_FORECAST_IN_ADVANCE, {
      variables: { coordinate: { lat: 53.55, lng: -113.47 } },
    });
    expect(result.data.Weather_getWeatherForecastInAdvance).toBeDefined();
    const weatherforecasts: any[] =
      result.data.Weather_getWeatherForecastInAdvance;
    weatherforecasts.forEach((weatherforecast) => {
      expect(weatherforecast.DayOfWeek).toBeDefined();
      expect(weatherforecast.MinTemperature).toBeDefined();
      expect(weatherforecast.MaxTemperature).toBeDefined();
      expect(weatherforecast.Description).toBeDefined();
    });
  });
});
