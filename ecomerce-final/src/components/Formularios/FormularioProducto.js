import Swal from 'sweetalert2';
import Axios from 'axios';
import UserForm from '../../hooks/UserForm';
import { Link } from 'react-router-dom';
const FormularioRegistro = () => {

    const enviarFormulario = (inputs) => {
        const token = window.localStorage.getItem('token');


        Axios.post('https://ecomerce-master.herokuapp.com/api/v1/item', inputs, {
            headers: {
                'Authorization': `JWT ${token}`
            }
        })
            .then(({ data, status }) => {
                //      console.log('funciona', data,status);

            })
            .catch(error => {
                console.log(error.response)
            })





    }

    const {
        inputs,
        handleInput,
        handleSubmit,
    } = UserForm(enviarFormulario, {})



    return (

        <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Agregar Producto</h1>
                </div>
                <form onSubmit={handleSubmit} >
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-gray-600">Nombre del producto</label>
                                    <input type="text" onChange={handleInput} type="text" value={inputs.product_name} id="product_name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm text-gray-600">Precio del producto</label>
                                    <input onChange={handleInput} type="number" value={inputs.price} id="price" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <label for="name" class="leading-7 text-sm text-gray-600">Descripcion del producto</label>
                                <input type="text" onChange={handleInput} type="text" value={inputs.description} id="description" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                            </div>

                            <div class="p-2 w-full">
                                <label for="name" class="leading-7 text-sm text-gray-600">SKu del producto</label>
                                <input onChange={handleInput} type="text" value={inputs.sku} id="sku" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div class="p-2 w-full">
                                <label for="name" class="leading-7 text-sm text-gray-600">Brand del producto</label>
                                <input onChange={handleInput} type="text" value={inputs.brand} id="brand" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div class="p-2 w-full">
                                <label for="name" class="leading-7 text-sm text-gray-600">Imagen del producto</label>
                                <input onChange={handleInput} type="text" value={inputs.image} id="image" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>


                            <div className="flex w-full my-4">
                                <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Registrar Producto
                                </button>
                            </div>


                        </div>

                    </div>
                </form>
            </div>
        </section>

    )
}

export default FormularioRegistro;
