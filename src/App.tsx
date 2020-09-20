import React from "react";
import "./App.css";
import ExpressionDisplay from "./components/ExpressionDisplay/ExpressionDisplay";
import { keyPadKeys } from "./data/KeyPadKeys";
import useExpressionReducer from "./hooks/useExpressionReducer/useExpressionReducer";
import useMathApi from "./hooks/useMathApi/useMathApi";
import Keypad from "./components/Keypad/Keypad";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";
import useKeydownEventListener from "./hooks/useKeydownEventListener/useKeydownEventListener";
import { InsertAction, MoveAction, DeleteAction } from "./hooks/useExpressionReducer/useExpressionActions";
import { Direction } from "./hooks/useExpressionReducer/useExpressionState";

function App() {
  const { expression, position, dispatch } = useExpressionReducer();

  useKeydownEventListener({ onKeyHandler });

  const { result } = useMathApi({ expression });

  function onKeyHandler(char: string) {
    switch (char) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "+":
      case "-":
      case "*":
      case "/":
      case ".":
      case "(":
      case ")":
        return dispatch(InsertAction({ char }));
      case "<":
        return dispatch(MoveAction({ direction: Direction.LEFT }));
      case ">":
        return dispatch(MoveAction({ direction: Direction.RIGHT }));
      case "Del":
        return dispatch(DeleteAction());
      default:
        return;
    }
  }

  return (
    <div className="App">
      <main className="mainContent">
        <ExpressionDisplay expression={expression} position={position} />
        <ResultDisplay result={result} />
        <Keypad keyPadKeys={keyPadKeys} clickHandler={onKeyHandler} />
      </main>
    </div>
  );
}

export default App;
