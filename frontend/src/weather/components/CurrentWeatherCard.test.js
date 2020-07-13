import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import CurrentWeatherCard from "./CurrentWeatherCard";

configure({ adapter: new Adapter() });
const initialProps = {
  temperature: 12,
  description: "Rain",
};
describe("Test current weather card", () => {
  it("renders correctly", () => {
    shallow(<CurrentWeatherCard {...initialProps} />);
  });

  const container = shallow(<CurrentWeatherCard {...initialProps} />);
  it("should have temperature and description rendered", () => {
    expect(container.contains(12)).toEqual(true);
    expect(container.contains("Rain")).toEqual(true);
  });
});
