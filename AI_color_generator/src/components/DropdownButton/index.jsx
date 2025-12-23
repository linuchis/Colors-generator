import React, { useState } from 'react';
import './styles.css';

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select");

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="select-container">
      {/* Botón principal */}
      <div 
        className={`select-header ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <svg 
          className={`chevron ${isOpen ? 'rotate' : ''}`} 
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <ul className="select-options">
          {options.map((option) => (
            <li 
              key={option} 
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;