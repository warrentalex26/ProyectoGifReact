import React, { useState} from 'react'
import PropTypes from 'prop-types';
//impt => para importar los PropTypes de manera mas rapida en visual studio code



export const AddCategory =  ({setCategories}) =>  { //setCategories lo pasamos como props desde el GifExpertApp.

    const [inputValue, setInputValue] = useState(''); //Usamos el hook useState para modificar los estados
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value) //Actualizar el estado del input con el valor del mismo
        
    }

    const handleSubmit = (event) => { //Esta funciona retorna cuando se le de enter al input
        event.preventDefault(); //Prevenir que recargue el navegador
        

        if (inputValue.trim().length > 2) { //trim( ) devuelve la cadena de texto despojada de los espacios en blanco en ambos extremos
            setCategories( categoria => [...categoria, inputValue]) //Usamos el operador spread en el arreglo ...categoria y le pasamos el valor nuevo que viene del input
            setInputValue(''); //Ponemos el input en blanco una vez hace una busqueda
        }

    }
    
        return (
            <form onSubmit={handleSubmit}> 
                <input type="text"
                placeholder="buscar"
                value={inputValue}
                onChange={handleInputChange}/>
            </form>
        )
    }


export default AddCategory

//Le decimos en la cosola que setCategories que viene de GifExpertApp tiene que ser requerido en los props
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}