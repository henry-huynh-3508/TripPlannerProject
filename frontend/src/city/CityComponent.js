import React from "react";
import "./CityComponent.css";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_CITY = gql`
  query GetCityInfo($id: ID!) {
    City_getCityInfo(ID: $id) {
      ID
      Name
      Description
    }
  }
`;

export default function CityComponent(props) {
  const { loading, error, data } = useQuery(GET_CITY, {
    variables: { id: props.cityID },
  });
  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;
  console.log(data);
  return <div></div>;
}

export { CityComponent };
