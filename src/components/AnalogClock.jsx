import React from 'react';
import { ANGLE_MAP } from '../constants';

const AnalogClock = ({ shape }) => {
  const [angle1, angle2] = ANGLE_MAP[shape] || ANGLE_MAP[" "];
  const isActive = shape !== " ";

  return (
    <div className="clock">
      <div 
        className={`hand ${!isActive ? 'inactive' : ''}`} 
        style={{ rotate: `${angle1}deg` }} 
      />
      <div 
        className={`hand ${!isActive ? 'inactive' : ''}`} 
        style={{ rotate: `${angle2}deg` }} 
      />
    </div>
  );
};

export default AnalogClock;