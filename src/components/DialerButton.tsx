import React from 'react';

import { DialerValue } from '../enums/dialerEnum';

interface Props {
  value: DialerValue;
  onDialerClick: (value: DialerValue) => void;
}

export const DialerButton = ({ value, onDialerClick }: Props) => {
  return (
    <button
      className={`button dialer ${value === '*' ? 'star' : ''}`}
      onClick={() => onDialerClick(value)}
    >
      {value}
    </button>
  );
};
