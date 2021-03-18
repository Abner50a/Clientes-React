import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Logo from './imagen/caballo.svg'
import CarritoLogo from './imagen/shopping-cart.png'
function Navbar(props) {


    const [
        { GetProductos }, usuario, { Logout }
    ] = props.usuario;


    //  const productos = Logout();



    return (



        // <div className="nav gray-500 ">
        //   <input type="checkbox" id="nav-check" />
        //   <div className="nav-header">
        //     <div className="nav-title">
        //       Eco-?
        //     </div>
        //   </div>
        //   <div className="nav-btn">
        //     <label for="nav-check">
        //       <span></span>
        //       <span></span>
        //       <span></span>
        //     </label>
        //   </div>

        //   <div className="nav-links">

        //     {usuario ? (

        //          <>
        //          <Link to="/"> Inicio </Link>
        //          <Link> Bienvenido {usuario.user.first_name} </Link>
        //          <Link> {usuario.user.role === 'ADMIN' 
        //          ? ( <Link to="/admin-producto"> Agregar Productos </Link>  )
        //         :  ( usuario.user.role )  } </Link>

        //          {/* <button  onClick={() => Logout()}  >Salir</button> */}
        //          <Link to="/carrito"> Carrrito </Link>
        //          <Link to="/logout"> Salir </Link>
        //         </>
        //     )
        //     : (
        //       <>
        //     <Link to="/"> Inicio </Link>
        //     <Link to="/iniciar-sesion"> Login </Link>
        //     <Link to="/registrarse"> Registrarse </Link>
        //     </>
        //     )}





        //     {/* <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
        //     <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
        //     <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
        //     <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a> */}
        //   </div>
        // </div>
        <>
            <div class="backdrop"></div>
            <header class="main-header">
                <div>
                    <button class="toggle-button">
                        <span class="toggle-button__bar"></span>
                        <span class="toggle-button__bar"></span>
                        <span class="toggle-button__bar"></span>
                    </button>
                    <Link to="/" class="main-header__brand">
                        <img src={Logo} alt="Tu tienda online" />
                    </Link>
                </div>
                <nav class="main-nav">
                    <ul class="main-nav__items">
                        <li class="main-nav__item">
                            <Link to="/"> Inicio </Link>
                        </li>
                        <li class="main-nav__item">
                            <Link>

                                {usuario ? (<>
                                    {usuario.user.role === 'ADMIN'
                                        ? (<Link to="/admin-producto"> Agregar Productos </Link>)
                                        : (usuario.user.role)}
                                </>)
                                    : (
                                        <Link to="/iniciar-sesion"> Login </Link>
                                    )
                                }



                            </Link>
                        </li>

                        {usuario ? (
                            <Link to="/carrito" class="main-nav__item__brand">
                                <img src={CarritoLogo} alt="Tu tienda online" />
                            </Link>

                        )
                            : (<>
                            </>)}

                        {usuario
                            ? (<li class="main-nav__item main-nav__item--cta">
                                <Link to="/logout"> Logout </Link>
                            </li>)
                            : (<li class="main-nav__item main-nav__item--cta">
                                <Link to="/registrarse" > Registrarse </Link>
                            </li>)
                        }

                    </ul>
                </nav>
            </header>


            <nav class="mobile-nav">
                <ul class="mobile-nav__items">
                    <li class="mobile-nav__item">
                        <Link to="/"> Inicio </Link>
                    </li>
                    <li class="mobile-nav__item">
                        <Link to="/iniciar-sesion"> Login </Link>
                    </li>
                    <li class="mobile-nav__item mobile-nav__item--cta">
                        <Link to="/registrarse"> Registrarse </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
