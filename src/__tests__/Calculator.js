import React from "react";
import Calculator from "../Calculator";
import { render, fireEvent } from "@testing-library/react";

test("should Calculator multiply correctly", () => {
  const { getByText, getByTestId, container } = render(<Calculator />);

  const button2 = getByText("2");
  fireEvent.click(button2);
  const buttonX = getByText("×");
  fireEvent.click(buttonX);
  const button4 = getByText("4");
  fireEvent.click(button4);
  fireEvent.keyDown(container, { key: "Enter", keyCode: 13 });

  const display = getByTestId("display");
  expect(display.textContent).toBe("8");
});
