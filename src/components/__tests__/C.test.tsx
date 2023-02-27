import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import C from "../C";

test("Test C component", () => {
  render(<C />);

  expect(screen.getByTestId("aaa")).toHaveTextContent("11");
});
