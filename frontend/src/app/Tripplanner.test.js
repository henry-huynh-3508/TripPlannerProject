import { MockedProvider } from "@apollo/react-testing";
import { Tripplanner } from "./Tripplanner";
import { GET_CITIES } from "./TripplannerQueries";
import React from "react";
import renderer from "react-test-renderer";
import wait from "waait";

it("renders without error and grid rendered correctly", async () => {
  const mocks = [
    {
      request: {
        query: GET_CITIES,
      },
      result: {
        data: {
          City_getCityMetadata: [
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
          ],
        },
      },
    },
  ];
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Tripplanner />
    </MockedProvider>
  );
  await wait(0);
  const tree = component.toJSON();
  expect(tree.children).toBeDefined();
  //Check if grid props rendered
  expect(tree.children[1].children[0].props.className).toEqual(
    "MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2"
  );
});
