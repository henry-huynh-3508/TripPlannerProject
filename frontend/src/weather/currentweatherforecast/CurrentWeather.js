import React from "react";
import "./CurrentWeather.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_CURRENT_WEATHER } from "./CurrentWeatherQueries";
import CurrentWeatherCard from "../components/CurrentWeatherCard";

export default function CurrentWeatherComponent(props) {
  const { loading, error, data } = useQuery(GET_CURRENT_WEATHER, {
    variables: { id: props.cityID },
  });
  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  const description =
    data.Weather_getCurrentWeatherForecastbyCityID.Description;
  const temperature =
    data.Weather_getCurrentWeatherForecastbyCityID.Temperature;
  return (
    <div>
      <div className="currentweathertitle">Current Weather</div>
      <CurrentWeatherCard
        description={description}
        temperature={temperature}
      ></CurrentWeatherCard>
    </div>
  );
}

export { CurrentWeatherComponent };
