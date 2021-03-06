import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

function CarritoCompras(props) {


  const [cantidad, setCantidad] = useState(1)
  const [precio, setPrecio] = useState('');

  const [
    { GetProductos }, usuario, { guardarProductos }, carritoCompras, { eleminarProductos }, setCarritoCompras, precioCarrito
  ] = props.productos;



  const cambiaPrecio = (miPrecio) => {
      // let total = miPrecio * cantidad;
      // console.log(miPrecio)
      return miPrecio;
      
  }




  useEffect(() => {

  }, [precio])

  const handleBoton = (index) => {
   

    // guardarProductos(idProducto);
    Swal.fire(

        {

        icon: 'success',
        title: 'Eleminaste este producto: ',
        text: 'Borrado!',

        
      })
      .then((result)=> {
        eleminarProductos(index);
      })
  }

  const handleBotonComprar = () => {
   

    // guardarProductos(idProducto);
    Swal.fire(

        {

        icon: 'success',
        title: 'Gracias: ',
        text: `Precio Total! ${precioCarrito}  ` ,

        
      })
    
  }

  //  console.log('carrito', carritoCompras)

  const mostrarItem = () => {
    
    const imagenFalso = 'https://placehold.it/280x140/abc';

    return carritoCompras.map((item, index) => {
      return (
        <tr>
          <td key={index} className="hidden pb-4 md:table-cell">
            <Link  to={`/producto/${item._id}`}>
              <img src={item.image
                ? item.image
                : imagenFalso}
                className="w-20 rounded" alt="Thumbnail" />
            </Link>
          </td>
          <td>
            <p className="mb-2 md:ml-4">{item.product_name}</p>

            <button onClick={() => handleBoton(index)} className="text-gray-700 md:ml-4">
              <small>(Eliminar Producto)</small>
            </button>

          </td>
          <td className="justify-center md:justify-end md:flex md:mt-4">
            <div className="w-20 h-10">
              <div className="relative flex flex-row w-full h-8">
                <input type="number" id={index} value="1" onChange={(e) => setCantidad(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="cantidad" />

              </div>
            </div>
          </td>
          <td className="hidden text-right md:table-cell">
            <span className="text-sm lg:text-base font-medium">
              ${item.price}
            </span>
          </td>
          <td className="text-right">
            <span className="text-sm lg:text-base font-medium">
              ${cambiaPrecio(item.price)}
            </span>
          </td>
        </tr>

      )
    })
  }


  return (
    <div className="contianer px-5 py-24 ">

      <div className="flex justify-center my-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            <table className="w-full text-sm lg:text-base" cellSpacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left">Producto</th>
                  <th className="lg:text-right text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">Qtd</span>
                    <span className="hidden lg:inline">Cantidad</span>
                  </th>
                  <th className="hidden text-right md:table-cell">Precio Unitario</th>
                  <th className="text-right">Precio Total</th>
                </tr>
              </thead>
              <tbody>


                {/* aqui se agrega */}
                {mostrarItem()}

                {/* Arriba se agrega */}


              </tbody>
            </table>
            <hr className="pb-6 mt-6" />
            <div className="my-4 mt-6 -mx-2 lg:flex">
              <div className="lg:px-2 lg:w-1/2">


                <div className="p-4 mt-1 bg-gray-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">Instrucciones</h1>
                </div>
                <div className="p-4">
                  <p className="mb-4 italic">Si tienes alguna duda no dudes en escribirla</p>
                  <textarea className="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
                </div>
              </div>
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-gray-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">Detalles</h1>
                </div>
                <div className="p-4">
                  <p className="mb-6 italic">Informacion del costo</p>
                  {/* <div className="flex justify-between border-b">
                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                  Subtotal
                </div>
                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                  {precio}
                </div>
              </div> */}


                  {/* <div className="flex justify-between pt-4 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    impuesto
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                
                  </div>
                </div> */}
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Total
                  </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      ${precioCarrito}
                    </div>
                  </div>
                  <a href="#">
                    <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                      {/* <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                  */}
                      <span  onClick={() => handleBotonComprar()} className="ml-2 mt-5px">Comprar</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CarritoCompras
