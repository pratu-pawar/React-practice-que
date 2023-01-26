import React, { useEffect, useState } from "react";

const Quefirst = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if(seconds > 0){
        const interval = setInterval(() => {
            setSeconds(seconds - 1);
          }, 1000);
          return () => clearInterval(interval);
    }

  }, [seconds]);

  const restart = () => {
    setSeconds(10);
  };

  return (
    <div>
      <div>
        <h1>Timer:{seconds}</h1>
        <button onclick={restart}>Restart</button>
      </div>
    </div>
  );
};

export default Quefirst;
