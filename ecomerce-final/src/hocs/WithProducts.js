import { useProductos } from '../context/ProductosContext';
import {useState,useEffect} from 'react';
const WithProducts = (WrappedComponent) => {
  return function WithProducts(props) {
     const state = useProductos();

     const [estaCargando, setCargando] = useState(true);

    //  function cargandoPrueba() {
    //    return new Promise(resolve => setTimeout(() => resolve(), 500));
    //  }
     
    //  useEffect(() => {
    //   cargandoPrueba().then(() => {
    //     const el = document.querySelector(".cargando-datos");
    //     if (el) {
    //       el.remove();
    //       setCargando(!estaCargando);
    //     }
    //   });
    // }, []);
  
    // if (estaCargando) {
    //   return null;
    // }

    



    return <WrappedComponent
       productos={state}
      {...props} />
  }
}

export default WithProducts;