import React, { useEffect, useState } from 'react'
import Input from '../elements/input'
import toast, {Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import { MdMarkunread, MdLock, MdPerson } from 'react-icons/all'
import { useFormik } from 'formik'
import { getAllCountries } from '../../services/contries.service'
import Button from '../elements/button'
import { register } from '../../services/auth.service'

const CreateUser = ({onClose}) => {
  const navigate = useNavigate();
  const [countriesOptions, setCountries] = useState([]);
  const [agreeWithTerms, setAgreeWithTerms] = useState(false);
  const [wantNewsLetter, setWantNewsLetter] = useState(false);
  const userTypes = [
    {
      value: 'ADMIN', label: 'ADMIN'
    },
    {
      value: 'PATIENT', label: 'PATIENT'
    },
    {
      value: 'PHYSICIAN', label: 'PHYSICIAN'
    },
    {
      value: 'PHARMACIST', label: 'PHARMACIST'
    }
  ]
  const errorInputStyle = {
    default: {
        border: '1px solid red',
    },
    right: {
        borderRight: '1px solid red',
    }
  }
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    gender: '',
    userTypes: ''
  }
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(5, 'Password must be at least 5 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    country: Yup.string().required('Country is required'),
    gender: Yup.string().required("Select Gender"),
    userType: Yup.string().required("Select User Type")
  })
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  useEffect(() => {
    fetchCountries()
  }, [])

  const fetchCountries = async () => {
    const countries = await getAllCountries()
    let options = []
    countries.forEach((country) => {
      const option = {
        label: country.name,
        value: country.name,
      }
      options.push(option)
    })
    setCountries(options)
    formik.setFieldValue('country', options[0].value)
    formik.setFieldValue('userType', userTypes[0].value)
  }

 

  const {values, errors, touched, getFieldProps, isValid, setFieldValue } = formik;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!isValid) return;
    let requestBody = {...values}
    delete requestBody.confirmPassword;
    const res = await register(requestBody);
    if(!res?.success) return toast.error(res || 'Something went wrong')
    toast.success("Registered successfully ")
    onClose();
  }

  return (
    <div className=" bg-white w-full">
      <Toaster />
      <div className="px-[20%] mt-2">
        <h1 className="text-center font-bold text-[1.5em]">
          Register User
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

      <div className="mt-6">
        <Input
          icon={<MdLock />}
          type="password"
          placeholder="Re-type Password"
          name="confirmPassword"
         style={errors.confirmPassword && touched.confirmPassword ? errorInputStyle : {}}
         fieldProps={getFieldProps('confirmPassword')}
        />
        {touched.confirmPassword && errors.confirmPassword && <label className='text-red-500 text-[11px]'>{errors.confirmPassword}</label>}
      </div>

      <div className="mt-6 flex justify-between">
        <div className="w-[45%]">
          <Input 
          icon={<MdPerson />} 
          type="text" 
          placeholder="First Name" 
          name="firstName"
          style={errors.firstName && touched.firstName ? errorInputStyle : {}}
          fieldProps={getFieldProps('firstName')}
          />
          {touched.firstName && errors.firstName && <label className='text-red-500 text-[11px]'>{errors.firstName}</label>}
        </div>
        <div className="w-[45%]">
          <Input 
          icon={<MdPerson />} 
          type="text" 
          placeholder="Last Name"
          name="lastName"
          style={errors.lastName && touched.lastName ? errorInputStyle : {}}
          fieldProps={getFieldProps('lastName')}
          />
         {touched.lastName && errors.lastName && <label className='text-red-500 text-[11px]'>{errors.lastName}</label>}
        </div>
      </div>

      <div>
        <div className="flex gap-10 my-6">
          <div class="form-check">
            <input
              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-border bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="MALE"
              onChange={(event) => setFieldValue('gender', event.target.value)}
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexRadioDefault1"
            >
              Male
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-border bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="FEMALE"
              onChange={(event) => setFieldValue('gender', event.target.value)}
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexRadioDefault2"
            >
              Female
            </label>
          </div>
        </div>

        <select
          id="countries"
          class="mt-4 border-gray-border border-[2px] text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(event) => setFieldValue('country', event.target.value)}
      >
          {countriesOptions.map((country, index) => (
            <option key={index} value={country.value}
            >
              {country.label}
            </option>
          ))}
        </select>

        <select
          id="userType"
          class="mt-4 border-gray-border border-[2px] text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(event) => setFieldValue('userType', event.target.value)}
      >
          {userTypes.map((type, index) => (
            <option key={index} value={type.value}
            >
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className='mt-6'>
        <Button 
         label={"Register"} 
         disabled={(!isValid) ? true : false}
         onClick={handleSubmit} 
        />
      </div>
    </div>
  )
}

export default CreateUser
