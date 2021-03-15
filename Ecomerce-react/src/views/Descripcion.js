import React, {useState,useEffect} from 'react';
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import Axios from 'axios'

import payload from '../utils/payload';
function Descripcion() {
    // const [boton,setBoton] = useState('');
    const [datos,setDatos] = useState([]);

    const params = useParams();
    const usuario = payload();
    const imagenFalso = 'https://placehold.it/280x140/abc'


    const handleBoton = (datos) => {
      //  console.log(datos)
        Swal.fire(
          
            {
              
            icon: 'success',
            title: 'Agregaste este producto : ',
            text: 'Agregado!',
           
             footer: `Producto Agregado - ${datos.product_name}`
          })
    }


    useEffect(() => {
        const ApiItem = `https://ecomerce-master.herokuapp.com/api/v1/item/${params.id}`;

        const buscanddProducto = async () => {
            const { data } = await Axios.get(ApiItem, {

            })

            setDatos(data);
        }

        //   console.log(itemBuscado)
        buscanddProducto();


    }, [])

    
    // console.log(datos)


    return (
        <div className="container fluid">
            <Navbar usuario={usuario} />

            <section className="container fluid mt-3 ">


                <div className="producto">

                    <div className="producto__imagen mr-3">

                        <div className="text-center">
                            <img src={
        datos.image
        ?  datos.image
        : imagenFalso
      } alt={datos._id}  className="img-thumbnail" alt="..." />
                        </div>

                    </div>

                    <div className="datos__producto producto__card ">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{datos.product_name}</h5>
                                <h5 className="card__precio" > ${datos.price} </h5>
                            </div>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">SKU: {datos.sku} </li>
                                <li className="list-group-item">Brand: {datos.brand}  </li>
                            </ul>

                            <div className="card__producto__boton" >

                                {usuario
                                ?
                                <button type="button"  onClick={() => handleBoton(datos)} className="btn btn-primary">Para comprar este producto debes estar logeado</button>
                                :
                                <button type="button" className="btn btn-primary" disabled>Para comprar este producto debes estar logeado</button>
                                }

                            </div>


                        </div>


                    </div>
                </div>

                <div className="descripcion-producto pt-3">
                    <Tabs description = {datos.description} />
                </div>


                



            </section>
        </div>
    )
}

export default Descripcion
