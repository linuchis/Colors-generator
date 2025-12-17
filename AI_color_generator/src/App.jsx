import React from 'react';
// 1. Importamos tu pantalla Home (ajusta la ruta si es necesario)
// Si tu archivo es src/screens/Home/index.jsx, esto funciona:
import Home from './screens/Home'; 
import './App.css'; // Puedes dejar esto o quitarlo si te molesta los estilos por defecto
function App() {
  // 2. Renderizamos Home. 
  // Ahora App.jsx delega todo el trabajo a tu pantalla Home.
  return (
    <div className="App">
      <Home />
    </div>
  );
}
export default App;