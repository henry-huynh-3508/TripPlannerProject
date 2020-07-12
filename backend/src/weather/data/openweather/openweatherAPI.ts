import axios from "axios";
import buildUrl from "build-url";

const OPENWEATHER_URL = "https://api.openweathermap.org/data/2.5/";

export class OpenWeatherAPI {
  private key: string;
  private lat: number = 0;
  private lng: number = 0;

  constructor(key: string) {
    this.key = key;
  }

  /**
   * Coordinates are used to determine the location to get weather
   */
  public setCoordinates(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
  /**
   * Documentation at https://openweathermap.org/api/one-call-api
   */
  public async getCurrentWeatherForecast() {
    const URL = buildUrl(OPENWEATHER_URL, {
      path: "onecall",
      queryParams: {
        lat: String(this.lat),
        lon: String(this.lng),
        exclude: "minutely,hourly,daily",
        appid: this.key,
      },
    });
    try {
      const weatherResult = await axios.get(URL);
      return weatherResult.data;
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Documentation at https://openweathermap.org/api/one-call-api
   */
  public async getWeatherForecast7days() {
    const URL = buildUrl(OPENWEATHER_URL, {
      path: "onecall",
      queryParams: {
        lat: String(this.lat),
        lon: String(this.lng),
        exclude: "current,minutely,hourly",
        appid: this.key,
      },
    });
    try {
      const weatherResult = await axios.get(URL);
      return weatherResult.data;
    } catch (error) {
      console.error(error);
    }
  }
}
