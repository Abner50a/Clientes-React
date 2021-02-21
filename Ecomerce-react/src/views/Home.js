import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Axios from 'axios';


function Home() {
    const [itemBuscado, setItemBuscado] = useState([])

    useEffect(() => {
        const ApiItem = 'https://ecomerce-master.herokuapp.com/api/v1/item';

        const buscanddProducto = async () => {
            const { data } = await Axios.get(ApiItem, {

            })

            setItemBuscado(data);
        }

        //   console.log(itemBuscado)
        buscanddProducto();


    }, [])


    const mostrarItem = () => {
        return itemBuscado.map((item) => {
           // const getItem = { item }
            return (
                <div class="col-auto mb-3">
                <Card getItem={item} />
                </div>
            )
        })
    }

    return (
        <div className="container fluid ">
            <Navbar />
            <div class="mt-4  ">
                <div class="row centrar-card">
                   
                     {mostrarItem()}

                </div>
            </div>

        </div>
    )
}

export default Home
