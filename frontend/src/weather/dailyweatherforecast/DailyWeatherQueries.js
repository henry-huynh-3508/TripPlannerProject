import gql from "graphql-tag";
export const GET_DAILY_WEATHER = gql`
  query dailyWeatherForecast($id: ID!) {
    Weather_getWeatherForecastInAdvancebyCityID(cityID: $id) {
      DayOfWeek
      MinTemperature
      MaxTemperature
      Description
    }
  }
`;
