import React from 'react'
import LoginForm from '../../components/forms/login-form';

const Login = () => {
 
    return (
        <div className='bg-gray-light w-full h-[100vh] flex justify-around items-center'>
            <div className='py-4 w-[35%] form-container'>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login;