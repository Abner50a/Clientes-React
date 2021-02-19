import React from 'react';
import { Route } from 'react-router-dom';
import SearchComponente from './buscarSerie/SearchComponente';
import CaratulaSerie from './IndexSerie/CaratulaSerie';

function Rutas({damePelicula}) {
    

    return (
    <>
      <Route exact path="/">
             <SearchComponente  enviarPelicula={damePelicula} />
      </Route>
      
      <Route exact path="/pelicula/:idPelicula">
        <CaratulaSerie  />
      </Route>
     
    </>
  )
}
export default Rutas;