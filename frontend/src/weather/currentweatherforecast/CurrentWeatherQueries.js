import gql from "graphql-tag";
export const GET_CURRENT_WEATHER = gql`
  query getCurrentWeatherForecast($id: ID!) {
    Weather_getCurrentWeatherForecastbyCityID(cityID: $id) {
      DayOfWeek
      Temperature
      Description
    }
  }
`;
