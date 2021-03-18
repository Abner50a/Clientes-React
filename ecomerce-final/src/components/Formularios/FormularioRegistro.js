import Swal from 'sweetalert2';
import Axios from 'axios';
import UserForm from '../../hooks/UserForm';
import { Link } from 'react-router-dom';
const FormularioRegistro = () => {

    const enviarFormulario = (inputs) => {
        console.log(inputs)

        if (inputs.repetir_password === inputs.password) {

            delete inputs.repetir_password;

            Axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup', inputs)
                .then(({ data, status }) => {
                    //      console.log('funciona', data,status);

                })
                .catch(error => {
                    console.log(error)
                })

            //    Swal.fire(
            //     'Cuenta Registrada!',
            //     'You clicked the button!',
            //     'success'
            //   )

        } else {


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
    } = UserForm(enviarFormulario, {})



    return (
    <div className="contianer px-5 py-24 ">

 
        <div className="flex flex-col    max-w-md  mx-auto  px-10 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 abajo">
            <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                Crearse una nueva Cuenta
            </div>
            <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                ¿Ya tienes una?
        <Link to="/iniciar-sesion" className="text-sm text-blue-500 underline hover:text-blue-700">
                    Inicia sesion
        </Link>
            </span>
            <div className="p-6 mt-8">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <input type="email" onChange={handleInput} value={inputs.email} id="email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Correo" />
                        </div>
                    </div>
                    <div className="flex gap-4 mb-2">
                        <div className=" relative ">
                            <input type="text" onChange={handleInput} value={inputs.first_name} id="first_name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="First name" placeholder="First name" />
                        </div>
                        <div className=" relative ">
                            <input type="text" onChange={handleInput} value={inputs.last_name} id="last_name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Last name" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <input type="password" onChange={handleInput} value={inputs.password} id="password" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Tu password" />           </div>
                    </div>

                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <input type="password" onChange={handleInput} value={inputs.repetir_password} id="repetir_password" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Verificar password" />           </div>
                    </div>

                    <div className="flex w-full my-4">
                        <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Registro
                                </button>
                    </div>
                </form>

            </div>
        </div>
        </div>
    )
}

export default FormularioRegistro;
