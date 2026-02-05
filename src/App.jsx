import React, { useState, useEffect } from 'react';
import Digit from './components/Digit';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimeDigits = () => {
    let hours = time.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12; 

    const hStr = hours.toString().padStart(2, '0');
    const mStr = time.getMinutes().toString().padStart(2, '0');
    const sStr = time.getSeconds().toString().padStart(2, '0');

    return { hStr, mStr, sStr };
  };

  const { hStr, mStr, sStr } = getTimeDigits();

  return (
    <div className="main-clock">
      <div className="time-group">
        <Digit value={hStr[0]} />
        <Digit value={hStr[1]} />
      </div>
      <div className="time-group">
        <Digit value={mStr[0]} />
        <Digit value={mStr[1]} />
      </div>
      <div className="time-group">
        <Digit value={sStr[0]} />
        <Digit value={sStr[1]} />
      </div>
    </div>
  );
}

export default App;