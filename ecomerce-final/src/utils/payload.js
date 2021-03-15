import {useEffect,useState} from 'react';
import Axios from 'axios'


export default function() {
    const [usuario,setUsuario] = useState('');
    const token = window.localStorage.getItem('token');


    // if(token) {
    //     // console.log(token);
    //     const [header, payload, signature] = token.split('.');
    //     const base64 = payload.replace('-','+').replace('_', '/');
    //     const payloadObject = JSON.parse(window.atob(base64));
    //     return payloadObject;
    // } else {
    //     return null;
    // }

    if(token) {

    useEffect(() => {
        const token = window.localStorage.getItem('token');
    
        const getUsuario = async  () => {
         await Axios.get('https://ecomerce-master.herokuapp.com/api/v1/user/me', {
            headers: {
              'Authorization' : `JWT ${token}`
            }
            
          })
          .then((res) => {
            // console.log(res.data)
            setUsuario(res.data)
          })
          .catch((error) => {
            console.log(error.response)
          })
      }
    
      // console.log(user)
      getUsuario()
    
    
      },[])
      
      return usuario
    }else {
        return null;
    }
    
}