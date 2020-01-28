import React from "react";
import AutoScalingText from "./AutoScalingText";
import { getFormattedValue } from "./utils";

class CalculatorDisplay extends React.Component {
  render() {
    const { value, ...props } = this.props;
    const formattedValue = getFormattedValue(value, navigator.language);

    return (
      <div {...props} className="calculator-display">
        <AutoScalingText>{formattedValue}</AutoScalingText>
      </div>
    );
  }
}

export default CalculatorDisplay;
