import NavBar from '../components/NavBar';
import ProductosCard from '../components/ProductosCard';
import {useState, useEffect} from 'react';


function Home(){


const [estaCargando, setCargando] = useState(null);

     



    return (
    
        <div className="container mx-auto " >
       

       <NavBar />
        
        <ProductosCard />
        

        </div>
        )
}

export default Home
