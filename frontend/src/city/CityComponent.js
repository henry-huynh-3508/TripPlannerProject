import React from "react";
import "./CityComponent.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_CITY } from "./CityComponentQueries";

export default function CityComponent(props) {
  const { loading, error, data } = useQuery(GET_CITY, {
    variables: { id: props.cityID },
  });
  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  const description = data.City_getCityInfo.Description;
  return (
    <div>
      <div className="citytitle">Description</div>
      <div className="citytext">{description}</div>
    </div>
  );
}

export { CityComponent };
