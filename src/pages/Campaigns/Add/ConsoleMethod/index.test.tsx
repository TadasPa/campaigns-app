import React from "react";
import ConsoleMethod from ".";
import { render } from "../../../../__jest__/utils";

jest.mock("react-redux");

test("Console method register global method", () => {
  render(<ConsoleMethod />);
  expect(window.AddCampaigns).toBeDefined();
});
