import React, { useEffect } from 'react';
import { useState } from 'react';

const AppNav = () => {
  const [user, setUser] = useState();
  const payload = JSON.parse(localStorage.getItem('payload'));
  const userType = payload?.userType;

  useEffect(() => {
    setUser(payload)
  },[])

  return (
    <div className='w-full h-[80px] shadow-sm flex justify-between p-4'>
        <div>
            <label className='font-extrabold'>{userType}</label>
        </div>

        <div>
            <label>{user?.firstName} {user?.lastName}</label>
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