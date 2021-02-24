import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect( () => { //Solo se ejecute esta instrucción cuando el componente es renderizado por primera vez
        getGifs(category)
        .then(imgs => setImages(imgs))
    }, [category])//Si la categoria cambia podremos volver a cambiar esa peticion http

    return (
        <>
        <h3>{category}</h3>
        <div className='card-grid'>
                 {images.map( img => <GifGridItem key={img.id} {...img}/>)}

        </div>
        </>
    )
}

export default GifGrid
