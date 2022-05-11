import React from 'react';

interface Props {
  value: string;
  onDialerClick: (value: string) => void;
}

export const DialerButton = ({ value, onDialerClick }: Props) => {
  return (
    <button className="button dialer" onClick={() => onDialerClick(value)}>
      {value}
    </button>
  );
};
