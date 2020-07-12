export function convertWeather(weatherList: any[]) {
  let weather: string = "";
  //generate a string of weather conditions
  weatherList.forEach((currentweather) => {
    weather = weather.concat(currentweather["main"]);
    weather = weather.concat(", ");
  });
  //trim last 2 characters
  weather = weather.substring(0, weather.length - 2);
  return weather;
}

export function convertDate(day: number) {
  switch (day) {
    case 0:
      return "SUN";
    case 1:
      return "MON";
    case 2:
      return "TUE";
    case 3:
      return "WED";
    case 4:
      return "THU";
    case 5:
      return "FRI";
    case 6:
      return "SAT";
  }
}
