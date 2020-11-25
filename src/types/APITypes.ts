export const factTypes = ["year", "trivia", "math"] as const;
export type FactType = typeof factTypes[number];
export interface FactTypeQuery {
  currentNumber: number | undefined;
  factType: FactType;
}

export const isValidFactType = (possible: any): possible is FactType => {
  return factTypes.includes(possible);
};
