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
    This query is used to get weather forecast for current day based on coordinates
    """
    Weather_getCurrentWeatherForecast(
      coordinate: WeatherCoordinate
    ): CurrentWeatherForecast
    """
    This query is used to get weather forecast for current day based on cityID
    """
    Weather_getCurrentWeatherForecastbyCityID(
      cityID: ID!
    ): CurrentWeatherForecast
    """
    This query is used to get weather forecast based on coordinates,requested days
    """
    Weather_getWeatherForecastInAdvance(
      coordinate: WeatherCoordinate
      howmanydays: Int = 5
    ): [DailyWeatherForecast]
    """
    This query is used to get weather forecast based on cityID,requested days
    """
    Weather_getWeatherForecastInAdvancebyCityID(
      cityID: ID!
      howmanydays: Int = 5
    ): [DailyWeatherForecast]
  }
`;
export default schema;
