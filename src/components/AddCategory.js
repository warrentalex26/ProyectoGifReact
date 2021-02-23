import React, { Component, useState} from 'react'

export const AddCategory =  () =>  {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value) //Actualizar el estado del input
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //Prevenir que recargue el navegador
        
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
