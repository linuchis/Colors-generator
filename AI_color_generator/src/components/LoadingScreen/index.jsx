import React from 'react';
import './styles.css'; // Importamos los estilos que crearemos abajo

const LoadingScreen = () => {
  return (
    // El contenedor principal que centrará todo
    <div className="loading-container">
      {/* El círculo que va a girar */}
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingScreen;