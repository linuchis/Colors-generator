import React from "react";
import './styles.css';

const SidebarButton = ({ isActive, label, onClick }) => {
    return (
        <button className={`sidebar-button ${isActive ? 'active' : ''}`} onClick={onClick}>
            <span className="sidebar-button-label">{label}</span>
        </button>
    );
}   

export default SidebarButton;

//Estos son los botones que van en la barra lateral izquierda, <aside> en Home.jsx