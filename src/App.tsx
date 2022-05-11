import React, { useEffect, useState } from 'react';
import './App.css';

import { DialerButton } from './components/DialerButton';

const dialerValues = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '*',
  '0',
  '#',
];

const sumDigits = (digits: string[]): number => {
  const numberValues = digits
    .filter((value) => value !== '*' && value !== '#')
    .map((stringValue) => parseInt(stringValue));

  return numberValues.reduce((partialSum, a) => partialSum + a, 0);
};

export const App = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [outputSum, setOutputSum] = useState(0);

  useEffect(() => {
    return setOutput([]);
  }, [outputSum]);

  const handleDialerClick = (value: string) => {
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
