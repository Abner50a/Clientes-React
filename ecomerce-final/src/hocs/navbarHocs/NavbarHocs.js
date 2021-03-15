import { HomeContextUse } from '../../context/home/HomeContext';
import payload from '../../utils/payload';
import {useState,useEffect} from 'react';
const NavbarHocs = (WrappedComponent) => {
  return function WithProducts(props) {
    //const usuario = payload(); 

     const state = HomeContextUse();

    // console.log(state[1].user)

    return <WrappedComponent
       usuario = {state}
      {...props} />
  }
}

export default NavbarHocs;