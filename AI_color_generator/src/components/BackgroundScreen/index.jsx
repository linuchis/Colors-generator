import React from 'react';
import './styles.css';

// Importa tus imágenes decorativas aquí
import circleShape from '../../assets/Forms/green_elipse.svg'; // Ejemplos
import OrangeElipse from '../../assets/Forms/orange_elipse.svg';
import PointCircle from '../../assets/Forms/points_circle.svg';
import PointCircle1 from '../../assets/Forms/points_circle1.svg';

const BackgroundScreen = () => {
  return (
    <div className="home-background-container">
      {/* imágenes flotantes */}
      <img src={circleShape} alt="" className="decoration-shape shape-1" />
      <img src={OrangeElipse} alt="" className="decoration-shape shape-2" />
      <img src={PointCircle} alt="" className="decoration-shape shape-3" />
      <img src={PointCircle1} alt="" className="decoration-shape shape-4" />
    </div>
  );
};

export default BackgroundScreen;