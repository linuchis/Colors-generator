import React from 'react';
import './styles.css'; // Importamos los estilos que crearemos abajo
import greenElipse from '../../assets/Forms/green_elipse.svg';
import orangeElipse from '../../assets/Forms/orange_elipse.svg';
import loadingSpinner from '../../assets/Forms/loading.svg';


const LoadingScreen = ({ isVisible }) => {
  return (
    <div className={`loading-container ${!isVisible ? 'loading-hidden' : ''}`}>
      {/* --- Imágenes de fondo --- */}
      {/* Usamos clases para posicionarlas absolutamente */}
      <img src={greenElipse} alt="" className="bg-shape bg-green-elipse" />
      <img src={orangeElipse} alt="" className="bg-shape bg-orange-elipse" />

      <img 
        src={loadingSpinner} 
        alt="Cargando..." 
        className="loading-svg-spinner" 
      />
    </div>
  );
};

export default LoadingScreen;