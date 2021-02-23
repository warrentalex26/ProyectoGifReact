import React, { Component, useState} from 'react'

export const AddCategory =  () =>  {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value)

    }
    
        return (
            <>
            <h1>{inputValue}</h1>
                <input type="text"
                placeholder="buscar"
                value={inputValue}
                onChange={handleInputChange}/>
            </>
        )
    }


export default AddCategory
