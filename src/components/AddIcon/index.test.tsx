import React from "react";
import AddIcon from ".";
import { render } from "../../__jest__/utils";

test("AddIcon machtes snapshot", () => {
  const { container } = render(<AddIcon />);
  expect(container).toMatchSnapshot();
});
