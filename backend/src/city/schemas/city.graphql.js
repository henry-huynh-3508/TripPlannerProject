const { gql } = require("apollo-server-express");

exports.schema = gql`
  """
  CityMetadata object returned by City_getCityMetadata query
  """
  type CityMetadata {
    ID: ID
    Name: String
  }
  """
  CityInfo object returned by City_getCityInfo query
  """
  type CityInfo {
    ID: ID
    Name: String
    Description: String
  }
  #Query
  type Query {
    """
    This query is used to get cityinfo
    """
    City_getCityInfo(ID: ID!): CityInfo
    """
    This query is used to get citymetadata
    """
    City_getCityMetadata: [CityMetadata]
  }
`;
