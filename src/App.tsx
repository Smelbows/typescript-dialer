import React, { useEffect, useState } from 'react';
import './App.css';

import { DialerButton } from './components/DialerButton';
import { DialerValue } from './enums/dialerEnum';

const dialerValues = Object.values(DialerValue);

const sumDigits = (values: DialerValue[]): number => {
  const digits = values
    .filter((value) => value !== '*' && value !== '#')
    .map((stringValue) => parseInt(stringValue));

  return digits.reduce((partialSum, a) => partialSum + a, 0);
};

const outputDisplay = (values: DialerValue[]): string => {
  return values.join('+');
};

export const App = () => {
  const [output, setOutput] = useState<DialerValue[]>([]);
  const [outputSum, setOutputSum] = useState(0);

  // useEffect(() => {
  //   setOutput([]);
  // }, [outputSum]);
  // useEffect taken away and onSum given directly to
  // the onClick function. When I added the outputDisplay,
  // I realised that the effect wasn't taking place every click,
  // if the value of the sum hadn't changed. The sums were still
  // accurate but the array was not emptying as outputSum hadn't changed.

  const onSum = () => {
    setOutputSum(sumDigits(output));
    setOutput([]);
  };

  const handleDialerClick = (value: DialerValue) => {
    setOutput([...output, value]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Dialer</p>
      </header>
      <main className="main">
        <div className="dialer-container">
          {dialerValues.map((dialerValue) => (
            <DialerButton
              key={dialerValue}
              value={dialerValue}
              onDialerClick={handleDialerClick}
            />
          ))}
        </div>
        <div className="output-display">
          <p>{outputDisplay(output)}</p>
        </div>
        <button className="button sum" onClick={onSum}>
          Sum
        </button>
        <p className="output-sum">{outputSum}</p>
      </main>
    </div>
  );
};
