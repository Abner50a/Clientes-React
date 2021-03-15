import { createContext, useState, useContext } from 'react';


const ProductosDescripcion = createContext();

const ThemeProvider = ({ children }) => {
  const name = 'Karla';
  const lastName = 'Solares';

  const state = { name, lastName };

  console.log('product-descripcion',state)

  return (
    <ProductosDescripcion.Provider value={state}>
      {children}
    </ProductosDescripcion.Provider>
  );
}


const useThemeDescripcion = () => {
  const state = useContext(ProductosDescripcion);
 // Si un componente fuera del provider utiliza este método...
  if (state === undefined) {
    throw new Error('useTheme can only be used inside ThemeProvider');
  }
 // Si un componente dentro del provider lo utiliza
  return state;
}
 
export {
  useThemeDescripcion,
  ThemeProvider,
} 