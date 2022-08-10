import React from 'react'
import Input from '../elements/input'
import { MdMarkunread, MdLock, MdPerson } from 'react-icons/all'
import Button from '../elements/button'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const LoginForm = () => {
  const errorInputStyle = {
    default: {
        border: '1px solid red',
    },
    right: {
        borderRight: '1px solid red',
    }
  }
  const initialValues = {
    email: '',
    password: ''
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().required('Password is required'),
  })
  const formik = useFormik({
    initialValues,
    validationSchema,
  });


  const {values, errors, touched, getFieldProps, isValid, setFieldValue } = formik;

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="shadow-sm  rounded-sm border-t-[8px] border-t-primary bg-white p-10 w-full">
      <div className="px-[20%] mt-2">
        <h1 className="text-center font-bold text-[1.5em]">
          Login to continue
        </h1>
      </div>
      
      <div className="mt-6">
        <Input 
        icon={<MdMarkunread />} 
        type="text" 
        placeholder="Email"
        name="email"
        style={errors.email && touched.email ? errorInputStyle : {}}
        fieldProps={getFieldProps('email')}
        />
        {touched.email && errors.email && <label className='text-red-500 text-[11px]'>{errors.email}</label>}
      </div>

      <div className="mt-6">
        <Input 
        icon={<MdLock />} 
        type="password" 
        placeholder="Password"
        name="password"
        style={errors.password && touched.password ? errorInputStyle : {}}
        fieldProps={getFieldProps('password')}
        />
        {touched.password && errors.password && <label className='text-red-500 text-[11px]'>{errors.password}</label>}
      </div>

      <div className='mt-6'>
        <Button 
         label={"Login"} 
         disabled={(!isValid) ? true : false}
         onClick={handleSubmit} 
        />
      </div>
    </div>
  )
}

export default LoginForm
