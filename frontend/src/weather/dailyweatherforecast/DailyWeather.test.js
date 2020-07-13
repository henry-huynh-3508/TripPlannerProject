import { MockedProvider } from "@apollo/react-testing";
import { DailyWeatherComponent } from "./DailyWeather";
import { GET_DAILY_WEATHER } from "./DailyWeatherQueries";
import React from "react";
import renderer from "react-test-renderer";
import wait from "waait";

it("renders without error and has the correct description", async () => {
  const mocks = [
    {
      request: {
        query: GET_DAILY_WEATHER,
        variables: {
          id: "1",
        },
      },
      result: {
        data: {
          Weather_getWeatherForecastInAdvancebyCityID: [
            {
              DayOfWeek: "MON",
              MinTemperature: 12.24,
              MaxTemperature: 17.26,
              Description: "Rain",
            },
            {
              DayOfWeek: "TUE",
              MinTemperature: 12.73,
              MaxTemperature: 20.8,
              Description: "Rain",
            },
          ],
        },
      },
    },
  ];
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DailyWeatherComponent cityID={"1"} />
    </MockedProvider>
  );
  await wait(0);
  const tree = component.toJSON();
  expect(tree.children).toBeDefined();
  expect(tree.children[0].children).toEqual(["Weather Forecasts"]);
  //TODO Find workaround since currently,enzyme is not working with MockedProvider
  //but the current tests should be sufficient to check if the component renders correctly
  expect(
    tree.children[1].children[0].children[0].children[0].children[0].children
  ).toEqual(["12", "°", "C - ", "17", "°", "C"]);
  expect(
    tree.children[1].children[0].children[0].children[0].children[1].children
  ).toEqual(["Rain"]);
  expect(
    tree.children[1].children[0].children[0].children[0].children[2].children
  ).toEqual(["MON"]);
  expect(
    tree.children[1].children[1].children[0].children[0].children[0].children
  ).toEqual(["13", "°", "C - ", "21", "°", "C"]);
  expect(
    tree.children[1].children[1].children[0].children[0].children[1].children
  ).toEqual(["Rain"]);
  expect(
    tree.children[1].children[1].children[0].children[0].children[2].children
  ).toEqual(["TUE"]);
});
