import React from "react";
import "./styles.css";
const ModelsButton = ({ isActive, label, onClick }) => {
  return (
    <button className={`models-button ${isActive ? "active" : ""}`} onClick={onClick}>
      <span className="models-button-label">{label}</span>
    </button>
  );
}
export default ModelsButton;