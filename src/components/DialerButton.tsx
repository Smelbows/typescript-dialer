import React from 'react';

interface Props {
  value: string;
  onDialerClick: (value: string) => void;
}

export const DialerButton = ({ value, onDialerClick }: Props) => {
  return (
    <button className="dialer-button" onClick={() => onDialerClick(value)}>
      {value}
    </button>
  );
};
