import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '../assets/icons/logout-icon.png';

const AppNav = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const payload = JSON.parse(localStorage.getItem('payload'));
  const userType = payload?.userType;

  useEffect(() => {
    setUser(payload)
  },[])

  const logout = () => {
    localStorage.removeItem('payload');
    localStorage.removeItem('token');
    navigate('/login')
  }

  return (
    <div className='w-full h-[80px] shadow-sm flex justify-between p-4'>
        <div>
            <label className='font-extrabold'>{userType}</label>
        </div>

        <div className='flex gap-4 items-center'>
            <label>{user?.firstName} {user?.lastName}</label>
            <img src={LogoutIcon} alt="logout" className='cursor-pointer'  onClick={logout}/>
        </div>
    </div>
  )
}

const Layout = ({ children }) => {
    return (
        <div className='bg-gray-light w-full h-[100vh]'>
            <div className='py-4 w-full '>
                <AppNav />
            </div>

            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;