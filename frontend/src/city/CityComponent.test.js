import { MockedProvider } from "@apollo/react-testing";
import { CityComponent } from "./CityComponent";
import { GET_CITY } from "./CityComponentQueries";
import React from "react";
import renderer from "react-test-renderer";
import wait from "waait";

it("renders without error and has the correct description", async () => {
  const mocks = [
    {
      request: {
        query: GET_CITY,
        variables: {
          id: "1",
        },
      },
      result: {
        data: {
          City_getCityInfo: {
            ID: "1",
            Name: "Edmonton",
            Description:
              "Edmonton is the capital city of the Canadian province of Alberta.",
          },
        },
      },
    },
  ];
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CityComponent cityID={"1"} />
    </MockedProvider>
  );
  await wait(0);
  const tree = component.toJSON();
  expect(tree.children).toBeDefined();
  expect(tree.children[0].children).toEqual(["Description"]);
  expect(tree.children[1].children).toEqual([
    "Edmonton is the capital city of the Canadian province of Alberta.",
  ]);
});
