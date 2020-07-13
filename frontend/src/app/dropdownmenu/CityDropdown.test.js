import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import CityDropdown from "./CityDropdown";

configure({ adapter: new Adapter() });
const initialProps = {
  cities: [
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
};
describe("Test City dropdown", () => {
  it("renders correctly", () => {
    shallow(<CityDropdown {...initialProps} />);
  });

  const container = shallow(<CityDropdown {...initialProps} />);
  it("should have a list of cities", () => {
    expect(
      container.contains(<div className="dropdowncitytext">Edmonton</div>)
    ).toEqual(true);
    expect(
      container.contains(<div className="dropdowncitytext">London</div>)
    ).toEqual(true);
    expect(
      container.contains(<div className="dropdowncitytext">Montreal</div>)
    ).toEqual(true);
    expect(
      container.contains(<div className="dropdowncitytext">Toronto</div>)
    ).toEqual(true);
    expect(
      container.contains(<div className="dropdowncitytext">Vancouver</div>)
    ).toEqual(true);
  });
});
