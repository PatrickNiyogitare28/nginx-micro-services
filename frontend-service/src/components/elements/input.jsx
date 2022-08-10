import React from 'react'
import { MdMarkunread } from 'react-icons/all'

const Input = ({icon, placeholder, type, style={},name, fieldProps}) => {
    return (
        <div className='w-full rounded-sm flex items-center border-[2px] border-gray-border' style={style?.default}>
            <div className='p-3 border-r border-r-gray-border' style={style?.right}>
               {icon}
            </div>
            <div className='px-2 w-[80%] '>
                <input 
                type={type} 
                name={name}
                placeholder={placeholder} 
                className='focus:outline-none text-sm w-[100%]'
                {...fieldProps}
                />
            </div>
        </div>
    )
}

export default Input;