import axios from "axios";
import { atom, selector } from "recoil";
import { BASE_API_URL, DEFAULT_FACT_TYPE } from "../config";
import { FactType } from "../types/APITypes";
import { getApiMemoKey } from "../utils/memoization";

/**
 * State for TargetNumber input feild
 */
export const numberInputState = atom<number | undefined>({
  key: "NumberInput",
  default: 10,
});

/**
 * State for FactType select field
 */
export const factTypeInputState = atom<FactType>({
  key: "FactTypeInput",
  default: DEFAULT_FACT_TYPE,
});

/**
 * Query selector for NumberFact
 * Makes memoized call to facts API
 */
const API_MEMO: { [key: string]: string } = {};
export const numberFactQuery = selector({
  key: "NumberFactQuery",
  get: async ({ get }) => {
    const currentNumber = get(numberInputState);
    const factType = get(factTypeInputState);

    if (!currentNumber) return undefined;

    const memoKey = getApiMemoKey(currentNumber, factType);
    if (API_MEMO[memoKey]) {
      return API_MEMO[memoKey];
    }

    const response = await axios.get(
      `${BASE_API_URL}/${currentNumber}/${factType}`
    );
    const data = String(response.data);

    // add to memo dict
    API_MEMO[memoKey] = data;
    return data;
  },
});
