import React from "react";
import "./DailyWeather.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_DAILY_WEATHER } from "./DailyWeatherQueries";
import DailyWeatherCard from "../components/DailyWeatherCard";
import Grid from "@material-ui/core/Grid";

export default function DailyWeatherComponent(props) {
  const { loading, error, data } = useQuery(GET_DAILY_WEATHER, {
    variables: { id: props.cityID },
  });
  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  const weatherforecasts = data.Weather_getWeatherForecastInAdvancebyCityID;
  return (
    <div>
      <div className="citytitle">Weather Forecasts</div>
      <Grid container spacing={2}>
        {weatherforecasts.map((dailyweather, index) => (
          <Grid item xs={6} sm={6} md={3} lg={2} xl={1} key={"card" + index}>
            <DailyWeatherCard
              key={index}
              mintemperature={dailyweather.MinTemperature}
              maxtemperature={dailyweather.MaxTemperature}
              description={dailyweather.Description}
              dayofweek={dailyweather.DayOfWeek}
            ></DailyWeatherCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export { DailyWeatherComponent };
