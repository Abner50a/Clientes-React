import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import './index.css'
function Navbar(props) {


  const [
    { GetProductos }, usuario , {Logout}
 ] = props.usuario;

 
//  const productos = Logout();



    return (
   

 
<div className="nav gray-500 ">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
      Eco-?
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">

    {usuario ? (
         
         <>
         <Link to="/"> Inicio </Link>
         <Link> Bienvenido {usuario.user.first_name} </Link>
         <Link> {usuario.user.role} </Link>
          
         {/* <button  onClick={() => Logout()}  >Salir</button> */}
         <Link to="/carrito"> Carrrito </Link>
         <Link to="/logout"> Salir </Link>
        </>
    )
    : (
      <>
    <Link to="/"> Inicio </Link>
    <Link to="/iniciar-sesion"> Login </Link>
    <Link to="/registrarse"> Registrarse </Link>
    </>
    )}
   
  


    
    {/* <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a> */}
  </div>
</div>

  
    )
}

export default Navbar
