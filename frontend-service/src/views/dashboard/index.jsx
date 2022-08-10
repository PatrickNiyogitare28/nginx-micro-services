import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../components/elements/button';
import Layout from '../../layout';


const Dashboard = () => {
    const [user, setUser] = useState();
    const [activeTab, setActiveTab] = useState(1);
    const payload = JSON.parse(localStorage.getItem('payload'));

    useEffect(() => {
        setUser(payload);
        if(user?.userType === 'ADMIN') return setActiveTab(1);
        if(user?.userType === 'PATIENT') return setActiveTab(1);
        if(user?.userType === 'PHYSICIAN') return setActiveTab(2);
        if(user?.userType === 'PHARMACIST') return setActiveTab(3);
    },[])
    return (
            <Layout>
                <div>
                    <div className='px-8 flex justify-between'>
                        <div className={`flex gap-4 text-sm`}>
                            {(user?.userType === 'ADMIN' || user?.userType === 'PATIENT') &&
                                <label 
                                className={`text-${(activeTab === 1) ? 'black': 'gray-500'} cursor-pointer`}
                                onClick={() => setActiveTab(1)}
                                >Patient Illness</label>
                            }
                            {(user?.userType === 'ADMIN' || user?.userType === 'PHYSICIAN') &&
                            <label 
                            className={`text-${(activeTab === 2) ? 'black': 'gray-500'} cursor-pointer`}
                            onClick={() => setActiveTab(2)}
                            >Physician Mission </label>
                            }
                            {(user?.userType === 'ADMIN' || user?.userType === 'PHARMACIST') && 
                            <label 
                            className={`text-${(activeTab === 3) ? 'black': 'gray-500'} cursor-pointer`}
                            onClick={() => setActiveTab(3)}
                            >Most bought drugs</label>
                            }
                        </div>
                        {(user?.userType === 'ADMIN') &&
                            <div className='w-[200px]'> 
                            <Button label={"ADD USER"} onClick={() => {}} />
                            </div>
                        }
                    </div>
                </div>
            </Layout>
    )
}

export default Dashboard;