
import NavBar from '../components/NavBar';
import VistaProducto from '../components/VistaProduct';
import {useState, useEffect} from 'react';

function ProductsVista() {
    const [estaCargando, setCargando] = useState(true);

     function cargandoPrueba() {
       return new Promise(resolve => setTimeout(() => resolve(), 100));
     }
     
       useEffect(() => {
      cargandoPrueba().then(() => {
        const el = document.querySelector(".cargando-datos");
        if (el) {
          el.remove();
          setCargando(!estaCargando);
        }
      });
    }, []);
  


    return (
        <div className=" container mx-auto" >
        <NavBar />
        
    
        <VistaProducto />


        </div>
        )
}

export default ProductsVista;
