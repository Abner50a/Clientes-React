import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CapitulosComponentes from './CapitulosComponentes';

const CaratulaSerie = () => {
    const idPelicula = useParams();
    const [pelicuas] = useState(idPelicula.idPelicula);
    const [datos, setDatos] = useState([]);
    const [episodios, setEpisodios] = useState([]);


    useEffect(() => {
        const peticion = async () => {
            await axios.get(`https://api.tvmaze.com/shows/${pelicuas}`, {
                params: {

                }
            }).then((response) => {
                const { data } = response
                setDatos(data)
            }

            ).catch(error => console.log(error))

            const { data } = await axios.get(`https://api.tvmaze.com/shows/${pelicuas}/episodes`, {

                params: {

                }
            })

            setEpisodios(data)




        }

        peticion();


    }, [pelicuas])


    //   console.log(episodios);

    // const renderEpisodio = episodios.map ((episodio) => {
    //   //console.log(episodio)

    //  return <CapitulosComponentes enviarPelicula={episodio} />
    // })



    return (

        <div>


            <div className="caratula-contenedor rounded card">
                <div className="row ">

                    <div className="col-sm-3 imagen">
                        <img className="rounded"
                            src={
                                datos.image
                                    ? `${datos.image.medium}`
                                    : ``
                            }

                        />
                    </div>
                    <div className="col-sm">
                        <p className="">
                            {/* {datos.summary} */}

                            {limpiarDLetras(datos.summary)}
                        </p>

                        <p>
                            Generos: {genero(datos.genres)}

                        </p>
                    </div>

                </div>

                <CapitulosComponentes episodios={episodios} url={datos._links
                    ? datos._links.previousepisode.href
                    : null
                } />

            </div>


        </div>
    )
}

const genero = (genero) => {

    if (genero) {
        return `${genero}`
    }

    return `no tiene`


}

const limpiarDLetras = (datos) => {
    const regex = /(<([^>]+)>)/gi

    if (datos) {
        const limpiamops = datos.replace(regex, '')
        return limpiamops
    } else {
        return 'no tiene summary'
    }
}
export default CaratulaSerie;