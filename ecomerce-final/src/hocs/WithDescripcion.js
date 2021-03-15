import { useProductos } from '../context/ProductosContext';



const WithDescripcion = (WrappedComponent) => {
  return function WithDescripcion(props) {
     const state = useProductos();

 
   


    return <WrappedComponent
       productos={state}
      {...props} />
  }
}

export default WithDescripcion;