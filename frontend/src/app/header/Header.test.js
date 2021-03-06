import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Header from "./Header";

test("renders header", () => {
  const component = render(<Header />);
  expect(component.container).toHaveTextContent("TRIP PLANNER");
});
