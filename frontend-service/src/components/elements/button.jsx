import React from 'react'

const Button = ({label, onClick, disabled=false}) => {
    return (
        <button onClick={onClick} className={`bg-primary text-white p-2 w-full`}
         style={disabled ? {opacity: 0.5} : {}}
        >
            {label}
        </button>
    )
}

export default Button;