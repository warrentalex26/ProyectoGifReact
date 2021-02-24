import React, {} from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
// import { getGifs } from '../helpers/getGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    const {data, loading} = useFetchGif(category);




    // const [images, setImages] = useState([])

    // useEffect( () => { //Solo se ejecute esta instrucción cuando el componente es renderizado por primera vez
    //     getGifs(category)
    //     .then(imgs => setImages(imgs))
    // }, [category])//Si la categoria cambia podremos volver a cambiar esa peticion http

    return (
        <>
        <h3>{category}</h3>

        {loading && <p>Loading</p>}
        <div className='card-grid'>
                 {data.map( img => <GifGridItem key={img.id} {...img}/>)}

        </div>
        </>
    )
}

export default GifGrid
