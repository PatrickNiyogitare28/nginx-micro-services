import React from 'react'
import RegisterForm from '../../components/forms/register-form';

const Register = () => {
 
    return (
        <div className='bg-gray-light w-full h-[100vh] flex justify-around items-center'>
            <div className='py-4 w-[35%] form-container'>
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register;