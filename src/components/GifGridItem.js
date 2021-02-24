import React from 'react'

const GifGridItem = ({id, title, images}) => {

    console.log(id, title, images)

    return (
        <div className='card'>
            <img src={images} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
