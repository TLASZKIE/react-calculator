import React from "react";
import Calculator from "../Calculator";
import { render, fireEvent } from "@testing-library/react";
import * as primesMock from "../primesFactory";

jest.mock("../primesFactory");

primesMock.nthPrime = jest.fn(() => 3);

test("should Calculator get prime correctly", () => {
  const { getByText, getByTestId } = render(<Calculator />);

  const button2 = getByText("2");
  fireEvent.click(button2);
  const buttonPrime = getByText("Prime");
  fireEvent.click(buttonPrime);

  const display = getByTestId("display");
  expect(display.textContent).toBe("3");

  expect(primesMock.nthPrime).toBeCalledTimes(1);
  expect(primesMock.nthPrime).toBeCalledWith(2);
});
