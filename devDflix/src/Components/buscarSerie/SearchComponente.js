import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    Card,
    CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
import SearchCard from './SearchCard';


const SearchComponente = () => {
    
    
   
    const [serie, setSerie] = useState('')
    const [buscado, setBuscado] = useState([]);

    useEffect(() => {
        const buscandoSerie = async () => {
            const { data } = await Axios.get('http://api.tvmaze.com/search/shows/', {
                params: {
                    q: serie,
                },
            });
            
        
            setBuscado(data);
           // console.log(data)
        }
        if (serie && !setBuscado.length) {
            buscandoSerie();
        } else {
            const tiempoRepuesta = setTimeout(() => {
                if (serie) {
                    buscandoSerie();
                }
            }, 500);

            return () => {
                clearTimeout(tiempoRepuesta);
            }
        };
      
    }, [serie]);

    const render = buscado.map((series) =>  {
       // console.log(series)
       return ( 
       
       <SearchCard  key= {series.show.id} serie={series} />
       )
    })


    return (
        <div>
            <InputGroup className="pt-2">
                <Input
                    value={serie}
                    onChange={(e) => setSerie(e.target.value)}
                    placeholder="Busca tu serie favorita!" />
                <InputGroupAddon addonType="append">
                    <Button color="secondary">Buscar novela</Button></InputGroupAddon>
            </InputGroup>


          
             <div className="pt-2">           
                 {render}
             </div>

       
        </div>
       
        
    )
}

export default SearchComponente;