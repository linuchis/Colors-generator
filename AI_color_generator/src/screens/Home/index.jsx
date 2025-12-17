import React, { useState, useEffect } from 'react';
// 1. IMPORTAS TU COMPONENTE
import LoadingScreen from '../../components/LoadingScreen'; 

const Home = () => {
  // 2. AQUÍ DECLARAS EL ESTADO
  // "isLoading" nace siendo TRUE.
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    // Simulamos la carga
    setTimeout(() => {
      // 3. AQUÍ LO CAMBIAS A FALSE CUANDO TERMINA
      setIsLoading(false); 
    }, 3000);
  }, []);

  // 4. AQUÍ DECIDES SI MOSTRARLO
  if (isLoading) {
    return <LoadingScreen />; // <--- Aquí usas tu componente
  }

  return (
    <div>
      <h1>Bienvenido a la Home</h1>
      <p>Ya cargó el contenido.</p>
    </div>
  );
};

export default Home;