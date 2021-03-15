import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/Navbar';
function ProductosCard(props) {



  const [
     { GetProductos } 
  ] = props.productos;

  
  const productos = GetProductos();
 
  

  const mostrarItem = () => {
    const imagenFalso = 'https://placehold.it/280x140/abc';

    return productos.map((item) => {
       // const getItem = { item }
   //    console.log(item)
        return (
          <div key={item._id} class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-2 my-2 ">
          <div class="w-1/3 bg-cover bg-landscape">
          <Link to={`/producto/${item._id}`} > 
            <img alt="moto" src={item.image 
              ? item.image
              : imagenFalso} class="mb-4"/>

          </Link>
          </div>
          <div class="w-2/3 p-4">
              <h1 class="text-gray-900 font-bold text-2xl">
                  {item.product_name}
              </h1>
              
            
              <div class="flex item-center justify-between mt-3">
                  <h1 class="text-gray-700 font-bold text-xl">
                  ${item.price
                  ? item.price
                  : `No tiene dato` }
                  </h1>
                  <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                      Agregar a Carrito
                  </button>
              </div>
          </div>
      </div> 
        )
    })
}


  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
  
      
 


      
         {mostrarItem()}
  
    


      </div>
    </div>
  </section>
    
  )
}

export default ProductosCard
