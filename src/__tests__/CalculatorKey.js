import React from "react";
import CalculatorKey from "../CalculatorKey";
import { render, fireEvent, screen } from "@testing-library/react";

test("should CalculatorKey handle click properly", () => {
  const clickFn = jest.fn();
  const { getByText, container } = render(
    <CalculatorKey onPress={clickFn}>ClickMe</CalculatorKey>
  );

  const button = getByText("ClickMe");
  fireEvent.click(button);

  expect(clickFn).toBeCalled();
  expect(clickFn).toBeCalledTimes(1);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        class="calculator-key undefined"
      >
        ClickMe
      </button>
    </div>
  `);
});
