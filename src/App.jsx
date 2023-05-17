import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Formulario from './Formulario';
import Previsualizacion from './Previsualizacion';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route exact path="/" element={<Formulario/>} />
            <Route path="/previsualizar" element={<Previsualizacion/>} />
            <Route path="*" element={<Formulario/>} />
        </Routes>
    </Router>
  );
}

export default App;
