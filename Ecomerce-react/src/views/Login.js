import React from 'react'
import NavBar from '../components/Navbar'
const Login = () => {



    return (
        <>
            <NavBar />
            <main  className="container fluid">
            
            <section className="my-4">

            <form >

            <div className="input-group">
                <span className="input-group-text mb-3">Correo</span>
                <input type="text" id="email" aria-label="email" className="form-control" />
            </div>

            <div className="input-group">
                <span className="input-group-text mb-3">Contraseña</span>
                <input type="password" id="password" aria-label="Contraseña" className="form-control" />
            </div>


            <div className="input-group">
                <span className="input-group-text mb-3">Confirmar password</span>
                <input type="password" id="repetir_password"  aria-label="Confirmar Password" className="form-control" />
            </div>

            <div className="input-group">
                <span className="input-group-text mb-3">First Name</span>
                <input type="text" id="first_name"  aria-label="First name" className="form-control" />
            </div>


            <div className="input-group">
                <span className="input-group-text mb-3">Last Name</span>
                <input type="text"  id="last_name" aria-label="Last Name" className="form-control" />
            </div>

            <div className="input-group">
                    <button type="submit" className="btn btn-info">Registrarse</button>
            </div>

            </form>
            </section>
            </main>
        </>
    )
}

export default Login
