import { gql } from "apollo-server-express";

const schema = gql`
  enum DayOfWeek {
    MON
    TUE
    WED
    THU
    FRI
    SAT
    SUN
  }
  """
  WeatherForecast object contains forecast info of a day
  """
  type WeatherForecast {
    DayOfWeek: DayOfWeek
    Temperature: Float
    Description: String
  }
  input WeatherCoordinate {
    lat: Float
    lng: Float
  }
  #Query
  type Query {
    """
    This query is used to get weather forecast for current day
    """
    Weather_getCurrentWeatherForecast(
      coordinate: WeatherCoordinate
    ): WeatherForecast
    """
    This query is used to get weather forecast based on requested days
    """
    Weather_getWeatherForecastInAdvance(
      coordinate: WeatherCoordinate
      howmanydays: Int = 5
    ): [WeatherForecast]
  }
`;
export default schema;
