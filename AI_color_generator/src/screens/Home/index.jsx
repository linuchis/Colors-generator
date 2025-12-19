import React, { useState, useEffect } from 'react';
import LoadingScreen from '../../components/LoadingScreen';
import './styles-home.css'; 
import BackgroundScreen from '../../components/BackgroundScreen'; 
import SidebarButton from '../../components/SidebarButton'; 
import AppLogo from '../../assets/Forms/logo_app.svg';
import ModelsButton from '../../components/ModelsButton';


const Home = () => {
  const [isLoading, setIsLoading] = useState(true); 
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulamos la carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  // 4. AQUÍ DECIDES SI MOSTRARLO
  return (
    <div style={{ position: 'relative' }}> {/* Contenedor base */}
      
      {/* 1. El Loader siempre está en el código, pero le pasamos el estado */}
      <LoadingScreen isVisible={isLoading} />

      {/* 2. El contenido de home */}
      <div className="home-content">
        {/* <header>
          /* esto está comentado por si voy a poner un header, por el momento no hay diseño en figma 
        </header> */}
        <main className='principal-main'>
          {/* Sidebar: Barra lateral izquierda */}
          <aside className='info-sidebar'>
            
            <div className='sidebar-header'>
              
              <h1>AI Color Generator</h1>
              <p>Generate color palettes using AI</p>
              <img src={AppLogo} alt="Logo" className="sidebar-logo" />
            </div>
            
            <SidebarButton isActive={true} label="Button 1" onClick={() => {}} />
            <SidebarButton isActive={false} label="Button 2" onClick={() => {}} />
            <SidebarButton isActive={false} label="Button 3" onClick={() => {}} />
          </aside>

          {/* Área principal de contenido */}
          <section className='main-content'>
            <section className='section-select-model'>
              <h2>Select the model for use</h2>
              <div className="models-contenedor">
                
                <div className='models-column-1'>
                  <ModelsButton isActive={true} label="Model 1" onClick={() => {}} />
                </div>

                <div className='models-column-2'>
                  <ModelsButton isActive={true} label="Model 1" onClick={() => {}} />
                </div>

              </div>
            </section>  
            {/* Crear aquí una división ----------------------------- */}

            <section className='section-options-generate'>
              <h2>Generate Colors</h2>
              <div className='options-contenedor'>

                <div>
                  <h2>Palette size</h2>
                  {/* Aquí va el llamado al componente palette size*/}
                </div>

                <div>
                  <h2>Clean Palette?</h2>
                  {/* Aquí va el llamado al componente clean palette */}
                </div> 

                <div>
                  <h2>Armony</h2>
                  {/* Aquí va el llamado al componente Armony */}
                </div> 

              </div>
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