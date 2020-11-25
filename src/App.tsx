import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { NumberInput } from "./components/Inputs/NumberInput";
import { NumberFact } from "./components/NumberFact/NumberFact";
import { Loading } from "./components/Loading/Loading";
import { FactTypeSelect } from "./components/Inputs/FactTypeSelect";
import { Spacer } from "./components/Spacer/Spacer";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Neat Facts</h1>
        <div className="App-Container">
          <div className="App-Input-Container">
            <NumberInput />
            <Spacer size="large" />
            <FactTypeSelect />
          </div>
          <Spacer size="large" />
          <div className="App-Body-Container">
            <h3>Your Fact</h3>
            <React.Suspense fallback={<Loading />}>
              <NumberFact />
            </React.Suspense>
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
