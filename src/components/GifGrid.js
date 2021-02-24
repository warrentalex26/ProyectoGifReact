import React, {useState, useEffect} from 'react'

const GifGrid = ({category}) => {

    const [count, setCount] = useState(0);

    useEffect( () => { //Solo se ejecute esta instrucción cuando el componente es renderizado por primera vez
        getGifs()
    }, [])

    const getGifs = async() => { //Usamos Async y await para hacer una peticion asincrona
        const api = `BHzrVw5bm8RmxyqDHF6i4qP9iH3UesCm`
        const url = `https://api.giphy.com/v1/gifs/search?q=Hola&limit=10&api_key=${api}`; //Esa es la url para hacer las peticiones GET a giphy
        const resp = await fetch(url); //Usamos el fetch para consumir los datos
        const {data} = await resp.json(); // Los datos los pasamos a un formato JSON
        const gifs = data.map( gifImg => { // Mandé la data al console.log para ver los datos y de ahi fui sacando las propiedades que manda la api, además recorremos el arreglo con map
            return{ //Retornamos un objeto con las propiedades
                id: gifImg.id,
                title: gifImg.title,
                images: gifImg.images?.downsized_medium.url
            }
        })

        console.log({gifs})

    }


    return (
        <div>
            <h3>{category}</h3>
            <h2>{count}</h2>
            <button onClick={ () => setCount(count + 1)}>Boton</button>
        </div>
    )
}

export default GifGrid
