import { HomeContextUse } from '../../context/home/HomeContext';
import {useState,useEffect} from 'react';
const HomeHocs = (WrappedComponent) => {
  return function WithProducts(props) {
     const state = HomeContextUse();

    // const [estaCargando, setCargando] = useState(true);

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

    
    // console.log(state[0].itemBuscado)


    return <WrappedComponent
       productos={state}
      {...props} />
  }
}

export default HomeHocs;