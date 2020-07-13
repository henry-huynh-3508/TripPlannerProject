import gql from "graphql-tag";
export const GET_CITY = gql`
  query GetCityInfo($id: ID!) {
    City_getCityInfo(ID: $id) {
      ID
      Name
      Description
    }
  }
`;
