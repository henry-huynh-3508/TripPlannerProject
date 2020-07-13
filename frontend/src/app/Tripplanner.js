import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Grid from "@material-ui/core/Grid";
import Header from "./header/Header";
import CityDropdown from "./dropdownmenu/CityDropdown";
import CityComponent from "../city/CityComponent";
import { GET_CITIES } from "./TripplannerQueries";
import CurrentWeather from "../weather/currentweatherforecast/CurrentWeather";
import DailyWeather from "../weather/dailyweatherforecast/DailyWeather";
function Tripplanner() {
  const { loading, error, data } = useQuery(GET_CITIES);
  //local cityID state
  const [cityID, setCityID] = React.useState(1);
  const handleCityChange = (id) => {
    setCityID(id);
  };

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <Header></Header>
      <main style={{ marginTop: "100px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CityDropdown
              cities={data.City_getCityMetadata}
              onCityChange={handleCityChange}
            ></CityDropdown>
          </Grid>
          <Grid item xs={12} sm={12}>
            <CityComponent cityID={cityID}></CityComponent>
          </Grid>
          <Grid item xs={12} sm={12}>
            <CurrentWeather cityID={cityID}></CurrentWeather>
          </Grid>
          <Grid item xs={12} sm={12}>
            <DailyWeather cityID={cityID}></DailyWeather>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
export { Tripplanner };
