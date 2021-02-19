import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import Rutas from '../Rutas';
const SearchCard = ({ serie }) => {


  const genero = (genero) => {

    if (genero.length) {
      return `${genero}`
    }

    return `no tiene`


  }

  return (



    <Card className="menu__serie mb-2">
      <CardImg className="card-img-top "
        src={
          serie.show.image
            ? `${serie.show.image.medium}`
            : ``

        }

        alt="Card image cap" />


      <CardBody>

        <CardTitle tag="h5">{serie.show.name}</CardTitle>

        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Genero:  {genero(serie.show.genres)}

        </CardSubtitle>
        {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        */}
        {/* <Button onClick={(e) => {
          //  enviarPelicula.damePelicula(serie.show.id)  
        }}
        >Ver Serie</Button> */}

  
        <Link to={`/pelicula/${serie.show.id}`} className="btn btn-primary">Ver pelicula</Link>
 

   



      </CardBody>
      
    </Card>



    // <div>
    //     {recorrerSerie(serie)}
    //     </div>
  )
}

export default SearchCard;