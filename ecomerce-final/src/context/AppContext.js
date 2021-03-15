import { createContext,useContext,useEffect, useState  } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {

 
 
  const state = [
    { name: 'Karla', lastName: 'Solares' }, // Atributos
    // Métodos
  ];



console.log('AppContext')

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}


const useProductos = () => {
  const state = useContext(AppContext);
  // Si un componente fuera del provider utiliza este método...
  if (state === undefined) {
    throw new Error('useProductos can only be used inside ThemeProvider');
  }
  // Si un componente dentro del provider lo utiliza
  return state;
}





export {
  useProductos,
  AppProvider,
  
}