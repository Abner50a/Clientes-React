import React, { useEffect, useState } from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, items
} from 'reactstrap';
import { Link } from 'react-router-dom';
//import imagen from '.../utils/abc.png';

const Index = ({ getItem }) => {

// console.log('ad',getItem)

const imagenFalso = 'https://placehold.it/280x140/abc'
//const imagenFalso = '.../utils/abc.png';
  return (

    <div className="card"  key={getItem._id}  style={{ "width": "18rem" }}>
      <img className="card-img-top card-imagen" src={
        getItem.image
        ?  getItem.image
        : imagenFalso
      } alt={getItem._id} />

      <div className="card-body">
        <h5 className="card-title">{getItem.product_name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Precio: {getItem.price}</h6>
        <p className="card-text">{getItem.description}</p>

        <Link to={`/producto/${getItem._id}`} > Ver Producto </Link>
        {/* <a href="#" class="card-link">Ver producto</a> */}
 
      </div>
    </div>

    

  )


};

export default Index;