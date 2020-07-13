import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Container from "@material-ui/core/Container";
import Header from "./header/Header";
import CityDropdown from "./dropdownmenu/CityDropdown";
import CityComponent from "../city/CityComponent";

const GET_CITIES = gql`
  query GetCityMetadata {
    City_getCityMetadata {
      ID
      Name
    }
  }
`;

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
        <Container>
          <CityDropdown
            cities={data.City_getCityMetadata}
            onCityChange={handleCityChange}
          ></CityDropdown>
        </Container>
        <CityComponent cityID={cityID}></CityComponent>
      </main>
    </div>
  );
}
export { Tripplanner };
