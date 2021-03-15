import React,{useEffect} from 'react'
import payload from '../../utils/payload';
import Navbar from '../../components/Navbar'
import UserForm from '../../hooks/UserForm'
import Swal from 'sweetalert2'
import Axios from 'axios'
import { useHistory } from "react-router-dom";

function AgregarProducto() {
    const usuario = payload();
    const history = useHistory();

    console.log(usuario)
    if(usuario === null ) {
        history.push('/')
    }else if(usuario.role === 'CUSTOMER'){
        history.push('/')
    }
    
    const enviarFormulario = (inputs) => {
       // console.log(inputs)
       const token = window.localStorage.getItem('token');
    
    
        Axios.post('https://ecomerce-master.herokuapp.com/api/v1/item', inputs ,{
            headers: {
                'Authorization' : `JWT ${token}`
              }
        } )
            .then(({data, status })  => {
          //      console.log('funciona', data,status);

            }  )
            .catch(  error => {
                console.log(error.response)
            } )
    

    }

    const {
        inputs,
        handleInput,
        handleSubmit,
    } = UserForm(enviarFormulario,{})


    return (
        <div className="container fluid ">
          
        <Navbar usuario={usuario} />

        <section className="mt-4  ">


        <form onSubmit={handleSubmit}>

            <div className="input-group">
                <span className="input-group-text mb-3">Nombre del producto</span>
            
                <input onChange={handleInput} type="text" value = {inputs.product_name}  id="product_name"  aria-label="Nombre del producto" className="form-control" />
            </div>

            <div className="input-group">
                <span className="input-group-text mb-3">Descripcion del producto</span>
                
                <input onChange={handleInput} type="text" value = {inputs.description}  id="description"  aria-label="Descripcion" className="form-control" />
            </div>

            <div className="input-group">
                <span className="input-group-text mb-3">Precio del producto</span>
                
                <input onChange={handleInput} type="number" value = {inputs.price}  id="price"  aria-label="Precio" className="form-control" />
            </div>

            <div className="input-group">
                <span className="input-group-text mb-3">SKU</span>
                
                <input onChange={handleInput} type="text" value = {inputs.sku}  id="sku"  aria-label="Sku del producto" className="form-control" />
            </div>

            <div className="input-group">
                <span className="input-group-text mb-3">brand</span>
                
                <input onChange={handleInput} type="text" value = {inputs.brand}  id="brand"  aria-label="brand producto" className="form-control" />
            </div>

            <div className="input-group">
                <span className="input-group-text mb-3">Imagen del producto</span>
                
                <input onChange={handleInput} type="text" value = {inputs.image}  id="image"  aria-label="Imagen producto" className="form-control" />
            </div>
            <div className="input-group">
                    <button type="submit" className="btn btn-info">Agregar Producto</button>
            </div>

            </form>

   

        </section>

        </div>
    )
}

export default AgregarProducto
