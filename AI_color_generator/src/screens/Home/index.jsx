import React, { useState, useEffect } from 'react';
import LoadingScreen from '../../components/LoadingScreen';
import './styles-home.css'; 
import BackgroundScreen from '../../components/BackgroundScreen'; // <--- 1. Importar


const Home = () => {
  const [isLoading, setIsLoading] = useState(true); 
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulamos la carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  // 4. AQUÍ DECIDES SI MOSTRARLO
  return (
    <div style={{ position: 'relative' }}> {/* Contenedor base */}
      
      {/* 1. El Loader siempre está en el código, pero le pasamos el estado */}
      <LoadingScreen isVisible={isLoading} />

      {/* 2. El contenido de home */}
      <div className="home-content">
        <header>
          {/* esto está comentado por si voy a poner un header, por el momento no hay diseño en figma */}
        </header>
        <main className='principal-main'>
          {/* Sidebar: Barra lateral izquierda */}
          <aside className='info-sidebar'>
            <h3>Información</h3>
            <p>Contenido 1</p>
            <p>Contenido 2</p>
            <p>Contenido 3</p>
          </aside>

          {/* Área principal de contenido */}
          <section className='main-content'>
            <section className='section-select-model'>
              <h2>Select the model for use</h2>
              <p>Aquí van los dos botones pero esto es texto sjjaksk</p>
            </section>  


            <section className='section-options-generate'>
              <h2>Generate Colors</h2>
              <h1>Palette size</h1>
              <p>Aquí va un pillbutton</p>
              <h1>Clean Palette?</h1>
              <p>Aquí va un circle button</p>
              <h1>Armony</h1>
              <p>Aquí va un listdown</p>
            </section>

            <section className='section-upload-image'>
              <h2>Upload the image</h2>
              <p>Aquí va el componente de subir imágenes</p>
            </section>

            <section className='section-upload-image-button'>
              <h2>Aqui va el botón componente para subir la imagen y ejecutar el programa</h2>
            </section>
          </section>
        </main>
      </div>
      <BackgroundScreen />


      
    </div>
  );


};

export default Home;