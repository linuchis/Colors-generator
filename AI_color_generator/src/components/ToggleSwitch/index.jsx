import React, { useState } from 'react';
import './styles.css'; 

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <label className="toggle-label">
      {/* input oculto para accesibilidad y funcionalidad */}
      <input
        type="checkbox"
        className="toggle-input"
        checked={isOn}
        onChange={handleToggle}
      />
      
      {/*  parte visual del interruptor */}
      <span className="toggle-track">
        <span className="toggle-thumb"></span>
      </span>
    </label>
  );
};

export default ToggleSwitch;