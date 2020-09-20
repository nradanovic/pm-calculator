import React, { useState, useEffect } from "react";
import "./ExpressionDisplay.css";

export default function ExpressionDisplay({ expression, position }: { expression: string; position: number }) {
  const [display, setDisplay] = useState<JSX.Element[]>();

  function createBtnElement(char: string, index: number, currentposition: number) {
    return (
      <span key={index} className={index === currentposition ? "positionIndicator" : ""}>
        {char}
      </span>
    );
  }

  useEffect(() => {
    const displayElements = expression
      .split("")
      .map((char: string, index: number) => createBtnElement(char, index, position));

    const newElementPlaceholder = createBtnElement("", expression.length, position);

    setDisplay([...displayElements, newElementPlaceholder]);
  }, [expression, position]);

  return <div className="expressionInputField">{display}</div>;
}
