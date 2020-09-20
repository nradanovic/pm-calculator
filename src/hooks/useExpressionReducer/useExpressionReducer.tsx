import { useReducer } from "react";
import { Actions, INSERT_ACTION_TYPE, MOVE_ACTION_TYPE, DELETE_ACTION_TYPE } from "./useExpressionActions";
import { calculatorInitialState, CalculatorState, Direction } from "./useExpressionState";

export default function useExpressionReducer() {
  const [calculatorState, dispatch] = useReducer(reducer, calculatorInitialState);

  function insertCharAtPosition(expression: string, position: number, char: string) {
    if (position < 0 || position > expression.length) {
      return expression;
    }
    return expression.substr(0, position) + char + expression.substr(position);
  }

  function deleteCharAtPosition(expression: string, position: number) {
    if (position < 0 || position > expression.length) {
      return expression;
    }
    return expression.substr(0, position - 1) + expression.substr(position);
  }

  function moveSelectorPosition(expression: string, position: number, direction: Direction): number {
    if (direction === Direction.LEFT) {
      return Math.max(0, position - 1);
    } else if (direction === Direction.RIGHT) {
      return Math.min(expression.length, position + 1);
    }
    return position;
  }

  function reducer(state: CalculatorState, action: Actions): CalculatorState {
    switch (action.type) {
      case INSERT_ACTION_TYPE:
        const newExpression = insertCharAtPosition(state.expression, state.position, action.payload.char);
        return {
          ...state,
          expression: newExpression,
          position: moveSelectorPosition(newExpression, state.position, Direction.RIGHT),
        };
      case MOVE_ACTION_TYPE:
        return {
          ...state,
          position:
            action.payload.direction === Direction.LEFT
              ? moveSelectorPosition(state.expression, state.position, Direction.LEFT)
              : moveSelectorPosition(state.expression, state.position, Direction.RIGHT),
        };
      case DELETE_ACTION_TYPE:
        return {
          ...state,
          expression: deleteCharAtPosition(state.expression, state.position),
          position: moveSelectorPosition(state.expression, state.position, Direction.LEFT),
        };
      default:
        return state;
    }
  }

  return { expression: calculatorState.expression, position: calculatorState.position, dispatch };
}
