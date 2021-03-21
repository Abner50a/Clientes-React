import { createContext, useContext, useEffect, useState } from 'react';
import payload from '../../utils/payload';
import Axios from 'axios';

import {
  Redirect
} from "react-router-dom";

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [carritoCompras, setCarritoCompras] = useState([]);
  const [precioCarrito, setPrecioCarrito] = useState(0);

  const usuario = payload();


  const Logout = () => {
    window.localStorage.removeItem('token');
    return <Redirect to="/" />;
  }


  const guardarProductos = (datos) => {

    const productoAntes = [
      ...carritoCompras, datos
    ];

    // console.log(datos.price);
    const sumarProducto = productoAntes.forEach(function (elemento) {

      setPrecioCarrito(precioCarrito + elemento.price);

    })
    // console.log(sumarProducto);
    //  setPrecioCarrito(sumarProducto);
    setCarritoCompras(productoAntes)
  }

  const eleminarProductos = (datos) => {
    const productoAntes = [...carritoCompras];
    //  console.log(datos);
    const borrarProducto = productoAntes.splice(datos, 1);


    console.log(borrarProducto[0].price);
    //   const sumarProducto = carritoCompras.forEach(function (elemento) {
    //     console.log(elemento[datos]);
    // })

    if (borrarProducto[0].price > 0) {


      setPrecioCarrito(precioCarrito - borrarProducto[0].price);
    } else {
      setPrecioCarrito(precioCarrito)
    }
    // console.log('cortado: ' , productoAntes)


    setCarritoCompras(productoAntes);
  }

  const GetProductos = () => {
    const [itemBuscado, setItemBuscado] = useState([])

    useEffect(() => {
      const ApiItem = 'https://ecomerce-master.herokuapp.com/api/v1/item';

      const buscanddProducto = async () => {
        const { data } = await Axios.get(ApiItem, {

        })

        setItemBuscado(data);
      }

      //   console.log(itemBuscado)
      buscanddProducto();


    }, [])

    return itemBuscado;

  }


  const GetProductosById = () => {

  }




  const state = [{ GetProductos }, usuario, { guardarProductos }, carritoCompras, { eleminarProductos }, setCarritoCompras, precioCarrito];



  return (
    <HomeContext.Provider value={state}>
      {children}
    </HomeContext.Provider>
  );
}


const HomeContextUse = () => {
  const state = useContext(HomeContext);
  // Si un componente fuera del provider utiliza este método...
  if (state === undefined) {
    throw new Error('HomeContextUse can only be used in HomeContextUse');
  }
  // Si un componente dentro del provider lo utiliza
  return state;
}





export {
  HomeContextUse,
  HomeProvider,

}