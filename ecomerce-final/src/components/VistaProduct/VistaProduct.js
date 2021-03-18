import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import Axios from 'axios'
import { Link } from 'react-router-dom';
function VistaProduct(props) {
  const [idProducto,setIdProducto] = useState([]);
  const params = useParams();

  // console.log(props.productos[2])

  const [
    { GetProductos } , usuario,  {guardarProductos} , carritoCompras 
 ] = props.productos;

 

  
  const handleBoton = (idProducto) => {
    //  console.log(datos)

   
      Swal.fire(
        
          {
            
          icon: 'success',
          title: 'Agregaste este producto : ',
          text: 'Agregado!',
         
           footer: `Producto Agregado - ${idProducto.product_name}`
        })
        .then((result)=> {
          guardarProductos(idProducto);
        })
  }
 
  useEffect(() => {
    const ApiItem = `https://ecomerce-master.herokuapp.com/api/v1/item/${params.id}`;

    const buscanddProducto = async () => {
        const { data } = await Axios.get(ApiItem, {

        })

        setIdProducto(data);
    }

    //   console.log(itemBuscado)
    buscanddProducto();


}, [])
  
// console.log(idProducto)
const imagenFalso = 'https://dummyimage.com/400x400';
    return (
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={idProducto.image 
              ? idProducto.image
              : imagenFalso}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{idProducto.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{idProducto.product_name}</h1>

        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

        <p className="leading-relaxed">{idProducto.description}</p>
       
         
        </div>

        {usuario ? (
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${idProducto.price}</span>
          <button  onClick={() => handleBoton(idProducto)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Agregar producto</button>
          
        </div>
        )
        :(
          <Link to="/registrarse"  class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
          <span class="ml-2">
              ¿No tienes una cuenta?
           </span>
          </Link>
        )
}
      </div>
    </div>
  </div>
</section>
    )
}

export default VistaProduct
