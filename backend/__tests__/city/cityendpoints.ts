import { createTestClient } from "apollo-server-integration-testing";
import { apolloServer } from "../utils";

// the mocked JSON data
const mockCityInfoResponse = {
  ID: "1",
  Name: "Edmonton",
  Description:
    'Edmonton is the capital city of the Canadian province of Alberta. Edmonton is on the North Saskatchewan River and is the centre of the Edmonton Metropolitan Region, which is surrounded by Alberta\'s central region. The city anchors the north end of what Statistics Canada defines as the "Calgary–Edmonton Corridor"',
};
const mockCityMetadataResponse = [
  {
    ID: "1",
    Name: "Edmonton",
  },
  {
    ID: "2",
    Name: "London",
  },
  {
    ID: "3",
    Name: "Montreal",
  },
  {
    ID: "4",
    Name: "Toronto",
  },
  {
    ID: "5",
    Name: "Vancouver",
  },
];

const MOCK_GET_CITY_METADATA_QUERY = `
  query testGetCityMetadata {
    City_getCityMetadata {
      ID
      Name
    }
  }
`;
const MOCK_GET_CITY_INFO_QUERY = `
  query testGetCityInfo($id: ID!) {
    City_getCityInfo(ID: $id) {
      ID
      Name
      Description
    }
  }
`;

describe("Test City Queries", () => {
  it("gets a city metadata", async () => {
    // create an instance of ApolloServer for testing
    const { query, mutate } = createTestClient({
      apolloServer,
    });
    // test correctness of metadata payload
    const result: any = await query(MOCK_GET_CITY_METADATA_QUERY);
    expect(result.data.City_getCityMetadata).toEqual(mockCityMetadataResponse);
  });

  it("gets a city info", async () => {
    // create an instance of ApolloServer for testing
    const { query, mutate } = createTestClient({
      apolloServer,
    });
    // test correctness of cityinfo payload
    const result: any = await query(MOCK_GET_CITY_INFO_QUERY, {
      variables: { id: "1" },
    });
    console.log(result.data.City_getCityInfo);
    expect(result.data.City_getCityInfo).toEqual(mockCityInfoResponse);
  });
});
