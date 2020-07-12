import { OpenWeatherAPI } from "./openweather/openweatherAPI";
import weatherkey from "../../../keys/weather-key.json";
export class WeatherAPI {
  private weather: OpenWeatherAPI;
  constructor() {
    this.weather = new OpenWeatherAPI(weatherkey.WEATHER_API_KEY);
  }
  public async getWeatherForecast(lat: number, lng: number) {
    // set the coordinates (latitude,longitude)
    this.weather.setCoordinates(lat, lng);
    await this.weather.getCurrentWeatherForecast();
  }
  public async getWeatherForecastInAdvance(
    lat: number,
    lng: number,
    howmanydays: number
  ) {
    this.weather.setCoordinates(lat, lng);
    const weatherResult = await this.weather.getWeatherForecast7days();
    console.log(weatherResult);
    return;
  }
  private generateWeatherForecastResponse(weatherObj: any) {
    const weatherForecast: any = {};
    weatherForecast["Day"] = 1;
  }
}
