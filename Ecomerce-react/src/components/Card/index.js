import React, { useEffect, useState } from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, items
} from 'reactstrap';

//import imagen from '.../utils/abc.png';

const Index = ({ getItem }) => {

console.log('getItem')

const imagenFalso = 'https://placehold.it/280x140/abc'
//const imagenFalso = '.../utils/abc.png';
  return (

    <div class="card" style={{ "width": "18rem" }}>
      <img class="card-img-top card-imagen" src={
        getItem.image
        ?  getItem.image
        : imagenFalso
      } alt={getItem._id} />

      <div class="card-body">
        <h5 class="card-title">{getItem.product_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Precio: {getItem.price}</h6>
        <p class="card-text">{getItem.description}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>

    

  )


};

export default Index;