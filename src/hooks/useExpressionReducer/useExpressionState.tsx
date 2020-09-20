export enum Direction {
  LEFT,
  RIGHT,
}

export type CalculatorState = {
  expression: string;
  position: number;
};

export const calculatorInitialState: CalculatorState = {
  expression: "",
  position: 0,
};
