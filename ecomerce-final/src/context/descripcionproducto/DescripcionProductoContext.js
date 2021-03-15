import { createContext,useContext,useEffect, useState  } from 'react';
import Axios from 'axios';
const DescripcionProductoContext = createContext();

const DescripcionProductoProvider = ({ children }) => {
  
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


const state = itemBuscado;

console.log('DescripcionProductoContext')

  return (
    <DescripcionProductoContext.Provider value={state}>
      {children}
    </DescripcionProductoContext.Provider>
  );
}


const DescripcionContextUse = () => {
  const state = useContext(DescripcionProductoContext);
  // Si un componente fuera del provider utiliza este método...
  if (state === undefined) {
    throw new Error('DescripcionContextUse can only be used in DescripcionContextUse');
  }
  // Si un componente dentro del provider lo utiliza
  return state;
}





export {
    DescripcionContextUse,
  DescripcionProductoProvider,
  
}