import React from 'react'
import Navbar from '../components/Navbar'
import Axios from 'axios'
import UserForm from '../hooks/UserForm'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();

    const enviarFormulario = (inputs) => {
       // console.log(inputs)
        
       Axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', inputs)
            .then(({data, status}) => {
                //console.log(data, status)
                const {token} = data;
                window.localStorage.setItem('token',token);
                history.push('/');

            })
            .catch( error => {
               // console.log(error.response.data.message)
                Swal.fire({
              
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo esta mal!',
                    footer: `${error.response.data.message}`
                  })
            } )
    }

    const {
        inputs,
        handleInput,
        handleSubmit,
    } = UserForm(enviarFormulario, {})


    return (
        <div className="container fluid ">
            <Navbar />
            <div className="mt-4  ">

                <h1>Iniciar Sesion</h1>

                <form   onSubmit={handleSubmit}  className="pt-2">
                    <div className="input-group">
                        <span className="input-group-text mb-3">Correo</span>

                        <input onChange={handleInput} value={inputs.email} type="text" id="email" aria-label="email" className="form-control" />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text mb-3">Contraseña</span>

                        <input onChange={handleInput} value={inputs.password} type="password" id="password" aria-label="Contraseña" className="form-control" />
                    </div>

                    <div className="input-group">
                        <button type="submit" className="btn btn-info">Login</button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default Login
