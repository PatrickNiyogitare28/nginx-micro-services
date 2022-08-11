import React from 'react';
import {FaTimes} from 'react-icons/fa'

const Modal = ({children, onClose}) => {
    return (
        <div className='absolute bg-[#0000003d] top-0 left-0 w-full h-[100vh] flex justify-around items-center'>
            <div className='bg-white w-[40%] h-[max-content] rounded-md p-8 form-container'>
                <div className='flex w-full'>
                    <FaTimes className='cursor-pointer ml-auto' onClick={onClose}  />
                </div>

                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;