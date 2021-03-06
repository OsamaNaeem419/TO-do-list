
import { useState } from 'react'

export const Button = ({color, text, onClick}) => {    
    return  (
        <button 
        onClick={onClick}
         className="btn" style= {{backgroundColor : color}}>
             {text}</button>
    )
}