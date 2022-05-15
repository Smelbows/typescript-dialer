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

export const App = () => {
  const [output, setOutput] = useState<DialerValue[]>([]);
  const [outputSum, setOutputSum] = useState(0);

  useEffect(() => {
    setOutput([]);
  }, [outputSum]);

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
        <button
          className="button sum"
          onClick={() => setOutputSum(sumDigits(output))}
        >
          Sum
        </button>
        <p className="output-sum">{outputSum}</p>
      </main>
    </div>
  );
};
