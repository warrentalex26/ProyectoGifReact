import React, {useState} from 'react'
import AddCategory from './components/AddCategory'


const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
    
    // const handledAdd = () => {
    //   /*AGREGAR ELEMENTOS AL ARREGLO DE ESTA MANERA PARA CAMBIAR EL ESTADO*/ 
    //   // setCategories([...categories, 'push']);
    //   // setCategories(['push', ...categories]);
    //   setCategories(cate => [...cate, 'Hola']);

    // }



    
    // el key no puede ser el indice y debe ser unico
    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories={setCategories}/>
          <hr/>
          {/* <button onClick={handledAdd}>Agregar</button> */}
          
          <ol>
              {categories.map(categoria => {
                return <li key={categoria}>{categoria}</li>
              })}
          </ol>
        </>
    )
}

export default GifExpertApp
