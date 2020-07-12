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
  CurrentWeatherForecast object contains forecast info of a day
  """
  type CurrentWeatherForecast {
    DayOfWeek: DayOfWeek
    Temperature: Float
    Description: String
  }
  """
  DailyWeatherForecast object contains forecast info of multiple days
  """
  type DailyWeatherForecast {
    DayOfWeek: DayOfWeek
    MinTemperature: Float
    MaxTemperature: Float
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
    ): CurrentWeatherForecast
    """
    This query is used to get weather forecast based on requested days
    """
    Weather_getWeatherForecastInAdvance(
      coordinate: WeatherCoordinate
      howmanydays: Int = 5
    ): [DailyWeatherForecast]
  }
`;
export default schema;
