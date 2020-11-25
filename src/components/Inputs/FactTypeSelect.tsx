import React from "react";
import { useRecoilState } from "recoil";
import { DEFAULT_FACT_TYPE } from "../../config";
import { factTypeInputState } from "../../state/NumberFactState";
import { isValidFactType } from "../../types/APITypes";
import { Spacer } from "../Spacer/Spacer";
import "./Input.css";

export const FactTypeSelect: React.FC = () => {
  const [factType, setFactType] = useRecoilState(factTypeInputState);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (isValidFactType(event.target.value)) {
      setFactType(event.target.value);
    } else {
      setFactType(DEFAULT_FACT_TYPE);
    }
  };

  return (
    <div className="Input-Group">
      <div className="Input-Label">Fact Type</div>
      <Spacer size="small" />
      <select className="Input-Field" value={factType} onChange={onChange}>
        <option value="math">Math</option>
        <option value="year">Year</option>
        <option value="trivia">Trivia</option>
      </select>
    </div>
  );
};
