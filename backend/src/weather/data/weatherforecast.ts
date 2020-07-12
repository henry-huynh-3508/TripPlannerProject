import { OpenWeatherAPI } from "./openweather/openweatherAPI";
import weatherkey from "../../../keys/weather-key.json";
import { convertDate, convertWeather } from "./openweather/weatherutils";
export class WeatherAPI {
  private weather: OpenWeatherAPI;
  constructor() {
    this.weather = new OpenWeatherAPI(weatherkey.WEATHER_API_KEY);
  }
  /**
   * Return a weather object that matches WeatherForecast schema
   */
  public async getWeatherForecast(lat: number, lng: number) {
    // set the coordinates (latitude,longitude)
    this.weather.setCoordinates(lat, lng);
    const rawWeather = await this.weather.getCurrentWeatherForecast();
    const finalWeather = this.generateCurrentWeatherForecastResponse(
      rawWeather
    );
    return finalWeather;
  }
  /**
   * Return an array of weather object that matches WeatherForecast schema
   */
  public async getWeatherForecastInAdvance(
    lat: number,
    lng: number,
    howmanydays: number
  ) {
    this.weather.setCoordinates(lat, lng);
    const rawWeather = await this.weather.getWeatherForecast7days();
    const finalWeather = this.generateWeatherForecastInAdvanceResponse(
      rawWeather,
      howmanydays
    );
    return finalWeather;
  }

  /**
   * Helper method for getWeatherForecastInAdvance
   */
  private generateWeatherForecastInAdvanceResponse(
    weatherObj: any,
    days: number
  ) {
    const dailyWeatherForecast: any[] = [];
    for (let i = 0; i < days; i++) {
      //console.log(weatherObj["daily"][i]);
      const weatherForecast: any = {};
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      const date = new Date(weatherObj["daily"][i]["sunrise"] * 1000);
      const dayofweek = date.getDay();

      //build weatherForecast response
      weatherForecast["DayOfWeek"] = convertDate(dayofweek);
      weatherForecast["MinTemperature"] = weatherObj["daily"][i]["temp"]["min"];
      weatherForecast["MaxTemperature"] = weatherObj["daily"][i]["temp"]["max"];
      weatherForecast["Description"] = convertWeather(
        weatherObj["daily"][i]["weather"]
      );
      //add to forecast list
      dailyWeatherForecast.push(weatherForecast);
    }

    return dailyWeatherForecast;
  }
  /**
   * Helper method for getCurrentWeatherForecast
   */
  private generateCurrentWeatherForecastResponse(weatherObj: any) {
    const weatherForecast: any = {};
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(weatherObj["current"]["dt"] * 1000);
    const dayofweek = date.getDay();

    //build weatherForecast response
    weatherForecast["DayOfWeek"] = convertDate(dayofweek);
    weatherForecast["Temperature"] = weatherObj["current"]["temp"];
    weatherForecast["Description"] = convertWeather(
      weatherObj["current"]["weather"]
    );
    return weatherForecast;
  }
}
