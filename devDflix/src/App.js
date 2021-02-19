import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,Route,
  // Link
} from "react-router-dom";
import NavBar from './Components/NavBar'
import SearchComponente from './Components/buscarSerie/SearchComponente'
import SearchLogica from './Components/buscarSerie/SearchLogica';
import CaratulaSerie from './Components/IndexSerie/CaratulaSerie';
import Rutas from './Components/Rutas';



function App() {
  

  // const damePelicula = (index) => {
  //     setPeliculas(index)
  // }


  return (

    <>
    <Router>   
      
     <div className="container">
       <Switch>
      
    
        <Rutas />

      </Switch>

    </div>
    </Router>

</>
  );
}

export default App;
