import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import DailyWeatherCard from "./DailyWeatherCard";

configure({ adapter: new Adapter() });
const initialProps = {
  mintemperature: 12,
  maxtemperature: 20,
  description: "Rain",
  dayofweek: "FRI",
};
describe("Test current weather card", () => {
  it("renders correctly", () => {
    shallow(<DailyWeatherCard {...initialProps} />);
  });

  const container = shallow(<DailyWeatherCard {...initialProps} />);
  it("should have temperature and description rendered", () => {
    expect(container.contains(12)).toEqual(true);
    expect(container.contains(20)).toEqual(true);
    expect(container.contains("Rain")).toEqual(true);
    expect(container.contains("FRI")).toEqual(true);
  });
});
