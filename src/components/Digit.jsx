import React from 'react';
import AnalogClock from './AnalogClock';
import { DIGIT_PATTERNS } from '../constants';

const Digit = ({ value }) => {
  const pattern = DIGIT_PATTERNS[value] || DIGIT_PATTERNS["0"];

  return (
    <div className="digit">
      {pattern.map((shape, index) => (
        <AnalogClock key={index} shape={shape} />
      ))}
    </div>
  );
};

export default Digit;