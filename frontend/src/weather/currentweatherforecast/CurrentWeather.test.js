import { MockedProvider } from "@apollo/react-testing";
import { CurrentWeatherComponent } from "./CurrentWeather";
import { GET_CURRENT_WEATHER } from "./CurrentWeatherQueries";
import React from "react";
import renderer from "react-test-renderer";
import wait from "waait";

it("renders without error and has the correct description", async () => {
  const mocks = [
    {
      request: {
        query: GET_CURRENT_WEATHER,
        variables: {
          id: "1",
        },
      },
      result: {
        data: {
          Weather_getCurrentWeatherForecastbyCityID: {
            DayOfWeek: "Mon",
            Temperature: 15.76,
            Description: "Rain",
          },
        },
      },
    },
  ];
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CurrentWeatherComponent cityID={"1"} />
    </MockedProvider>
  );
  await wait(0);
  const tree = component.toJSON();
  expect(tree.children).toBeDefined();

  //TODO Find workaround since currently,enzyme is not working with MockedProvider
  //but the current tests should be sufficient to check if the component renders correctly
  expect(tree.children[0].children).toEqual(["Current Weather"]);
  expect(tree.children[1].children[0].children[1].children[0]).toEqual("Rain");
  expect(tree.children[1].children[0].children[0].children[0]).toEqual("16");
});
