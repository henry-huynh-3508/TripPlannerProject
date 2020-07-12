import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Header from "./header/Header";
import CityComponent from "../city/CityComponent";

const GET_CITIES = gql`
  query testGetCityMetadata {
    City_getCityMetadata {
      ID
      Name
    }
  }
`;

function Tripplanner() {
  const { loading, error, data } = useQuery(GET_CITIES);
  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  console.log(data);
  return (
    <div>
      <Header></Header>
      <main main style={{ marginTop: "100px" }}>
        <CityComponent cities={data.City_getCityMetadata}></CityComponent>
      </main>
    </div>
  );
}
export { Tripplanner };
