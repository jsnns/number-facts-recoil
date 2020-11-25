import { FactType } from "../types/APITypes";

export const getJoinedKey = (values: any[]): string => values.join("-");
export const getApiMemoKey = (
  currentNumber: number,
  factType: FactType
): string => getJoinedKey([currentNumber, factType]);
