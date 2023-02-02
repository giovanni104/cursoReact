
import React, {useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({category}) => {


useEffect(() => {
    getGifs(category);
}, [ ])

const [counter, setCounter] = useState(10);


 


    return (    
    <>
    <h3>{category}</h3>
    <p>Hola mundo</p>

    <h5>{counter}</h5>
    <button onClick={()=> setCounter(counter+1)}>+1</button>
    </>




  )
}
