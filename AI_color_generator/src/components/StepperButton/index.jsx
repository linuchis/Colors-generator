import React, { useState } from 'react';
import './styles.css'; // 

const StepperButton = () => {
  const [count, setCount] = useState(2);

  return (
    <div className="stepper-container">
      <button 
        className="stepper-button" 
        onClick={() => setCount(Math.max(0, count - 1))}
      >
        −
      </button>
      
      <div className="stepper-display">
        {count}
      </div>
      
      <button 
        className="stepper-button" 
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default StepperButton;