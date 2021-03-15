import { HomeContextUse } from '../../context/home/HomeContext';
import {useState,useEffect} from 'react';

const ProductosDescripcionHocs = (WrappedComponent) => {
  return function ProductosDescripcionHocs(props) {
     const state = HomeContextUse();

    
   

    

    return <WrappedComponent
      productos = {state}
      {...props} />
  }
}

export default ProductosDescripcionHocs;