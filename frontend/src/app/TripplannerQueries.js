import gql from "graphql-tag";
export const GET_CITIES = gql`
  query GetCityMetadata {
    City_getCityMetadata {
      ID
      Name
    }
  }
`;
