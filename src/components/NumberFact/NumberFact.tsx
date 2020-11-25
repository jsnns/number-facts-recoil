import React from "react";
import { useRecoilValue } from "recoil";
import { numberFactQuery } from "../../state/NumberFactState";

export const NumberFact: React.FC = () => {
  const numberFact = useRecoilValue(numberFactQuery);

  if (numberFact) {
    return <div>{numberFact}</div>;
  }

  return null;
};
