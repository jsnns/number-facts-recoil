import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { numberInputState } from "../../state/NumberFactState";
import { Spacer } from "../Spacer/Spacer";
import "./Input.css";

export const NumberInput: React.FC = () => {
  const [number, setNumber] = useRecoilState(numberInputState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(event.target.value);
    if (isNaN(numberValue) || !numberValue) {
      setNumber(undefined);
    } else {
      setNumber(numberValue);
    }
  };

  return (
    <div className="Input-Group">
      <div className="Input-Label">Target Number</div>
      <Spacer size="small" />
      <input
        className="Input-Field"
        type="number"
        value={number || ""}
        onChange={onChange}
      />
    </div>
  );
};
