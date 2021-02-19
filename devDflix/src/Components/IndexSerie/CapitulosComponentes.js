import axios from 'axios';
import React, {useState,useEffect} from 'react';

const CapitulosComponentes = ({episodios,url}) => {
    // console.log(url)
    // console.log(episodios)
    

    const verificar = (urlApi, url) => {
        let numero = 0;
        
    }


 const epi =   episodios.map((episodio) => {
      //  console.log(episodio)
    // console.log(episodio.sort(episodio.airdate))

    //console.log(episodio._links.self.href)
    
     const  urlApi = episodio._links.self.href;
    let traido = 0;

     if(urlApi === 'http://api.tvmaze.com/episodes/1') {
        // parseInt (traido = episodio.season)
        let resta = episodio.season
       // traido = resta + episodio.season;


     }


    
     console.log(traido)


   //.log(season)
    if(episodio.season === episodio.season ){
        
    

    return(
        <>

      
         
            <tbody key={episodio.id}>
                <tr>
                    <th scope="row">{episodio.season}	</th>
                    <td>{episodio.name}	</td>
                    <td>{episodio.airdate}	</td>
             
                </tr>
              
            </tbody>
     
        </>
    )
} 
})

return(

    <div className="capitulos pt-3">
          <h2 className="titulo">Ultimo capitulo</h2>
          <table className="table">
               
            <thead>
                <tr>
                    <th scope="col">Temporada</th>
                    <th scope="col">Nombre del capitulo</th>
                    <th scope="col">Fecha de salida</th>
                
                </tr>
            </thead>
                {epi}
          </table>
    </div>
      
  
)

}


export default CapitulosComponentes;
