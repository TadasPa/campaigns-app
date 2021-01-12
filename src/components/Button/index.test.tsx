import React from "react";
import Button from ".";
import { render, screen } from "../../__jest__/utils";
import userEvent from "@testing-library/user-event";

test("Button machtes snapshot", () => {
  const { container } = render(<Button />);
  expect(container).toMatchSnapshot();
});

test("Button onClick callback is called", () => {
  const onClickCallback = jest.fn();
  render(<Button onClick={onClickCallback} />);

  userEvent.click(screen.getByTestId("button-component"));

  expect(onClickCallback).toHaveBeenCalledTimes(1);
});
