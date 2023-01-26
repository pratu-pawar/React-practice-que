import React, { useRef, useState } from "react";

const QueElavan = () => {
    const [color, setColor] = useState('red');
    const colorRef = useRef(color);
  
    function handleClick() {
      if (colorRef.current === 'red') {
        setColor('black');
        colorRef.current = 'black';
      } else {
        setColor('red');
        colorRef.current = 'red';
      }
    }

  return (
    <div>
    <button onClick={handleClick}>Toggle Background</button>
    <div style={{ backgroundColor: color, width: '100px', height: '100px' }}>
    </div>
  </div>
  );
};

export default QueElavan;
