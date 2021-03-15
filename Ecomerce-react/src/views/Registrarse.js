import React, { useState } from 'react'
import NavBar from '../components/Navbar'
import UserForm from '../hooks/UserForm'
import Swal from 'sweetalert2'
import Axios from 'axios'
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const token = window.localStorage.getItem('token');

    if(token){
        history.push('/'); 
    }


    const enviarFormulario = (inputs) => {
        console.log(inputs)

       if(inputs.repetir_password === inputs.password){
            
        delete inputs.repetir_password;

        Axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup', inputs )
            .then(({data, status })  => {
          //      console.log('funciona', data,status);

            }  )
            .catch(  error => {
                console.log(error)
            } )

        //    Swal.fire(
        //     'Cuenta Registrada!',
        //     'You clicked the button!',
        //     'success'
        //   )
          
       }else {


        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo esta mal!',
            footer: 'La contraseña no esta correcta'
          })

       }

    }

    const {
        inputs,
        handleInput,
        handleSubmit,
    } = UserForm(enviarFormulario,{})

    return (
        <div className="container fluid">
            
            <NavBar  />
            <main  className="container fluid">
            
            <section className="my-4">

            <form onSubmit={handleSubmit}>

            <div className="input-group">
                <span className="input-group-text mb-3">Correo</span>
            
                <input  onChange={handleInput}  value = {inputs.email}  type="text" id="email" aria-label="email" className="form-control" />
            </div>

            <div className="input-group">
                <span className="input-group-text mb-3">Contraseña</span>
             
                <input onChange={handleInput}  value = {inputs.password}  type="password" id="password" aria-label="Contraseña" className="form-control" />
            </div>


            <div className="input-group">
                <span className="input-group-text mb-3">Confirmar password</span>
             
                <input onChange={handleInput} value = {inputs.repetir_password}   type="password" id="repetir_password"  aria-label="Confirmar Password" className="form-control" />
            </div>

            <div className="input-group">
                <span className="input-group-text mb-3">First Name</span>
              
                <input onChange={handleInput} type="text" value = {inputs.first_name}  id="first_name"  aria-label="First name" className="form-control" />
            </div>


            <div className="input-group">
                <span className="input-group-text mb-3">Last Name</span>
                
                <input onChange={handleInput}  type="text"   value = {inputs.last_name}  id="last_name" aria-label="Last Name" className="form-control" />
            </div>

            <div className="input-group">
                    <button type="submit" className="btn btn-info">Registrarse</button>
            </div>

            </form>
            </section>
            </main>
        </div>
    )
}

export default Login
