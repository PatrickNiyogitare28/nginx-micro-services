import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../components/elements/button';
import Table from '../../components/elements/table';
import Layout from '../../layout';
import { getMedicalData } from '../../services/medical-data.service';


const Dashboard = () => {
    const [user, setUser] = useState();
    const [activeTab, setActiveTab] = useState(1);
    const [medicalData, setMedicalData] = useState();
    const payload = JSON.parse(localStorage.getItem('payload'));

    useEffect(() => {
        setUser(payload);
        if(user?.userType === 'ADMIN') return setActiveTab(1);
        if(user?.userType === 'PATIENT') return setActiveTab(1);
        if(user?.userType === 'PHYSICIAN') return setActiveTab(2);
        if(user?.userType === 'PHARMACIST') return setActiveTab(3);
    },[])

    useEffect(() => {
        fetchMedicalData(user?.userType);
    },[user]);

    const fetchMedicalData = async (userType) => {
        if(!userType) return;
        const res = await getMedicalData(
            (userType === 'ADMIN' || userType === 'PATIENT') ? `patient-illnesses` :
            (userType === 'ADMIN' || userType === 'PHYSICIAN') ? `physicians-missions` :
            (userType === 'ADMIN' || userType === 'PHARMACIST') ? 'most-bought-drugs' : null
            ); 
        setMedicalData(res);
    }
    return (
            <Layout>
                <div>
                    <div className='px-8 flex justify-between'>
                        <div className={`flex gap-4 text-sm`}>
                            {(user?.userType === 'ADMIN' || user?.userType === 'PATIENT') &&
                                <label 
                                className={`text-${(activeTab === 1) ? 'black': 'gray-500'} cursor-pointer`}
                                onClick={() => {setActiveTab(1), fetchMedicalData('PATIENT')}}
                                >Patient Illness</label>
                            }
                            {(user?.userType === 'ADMIN' || user?.userType === 'PHYSICIAN') &&
                            <label 
                            className={`text-${(activeTab === 2) ? 'black': 'gray-500'} cursor-pointer`}
                            onClick={() => {setActiveTab(2, fetchMedicalData('PHYSICIAN'))}}
                            >Physician Mission </label>
                            }
                            {(user?.userType === 'ADMIN' || user?.userType === 'PHARMACIST') && 
                            <label 
                            className={`text-${(activeTab === 3) ? 'black': 'gray-500'} cursor-pointer`}
                            onClick={() => {setActiveTab(3), fetchMedicalData('PHARMACIST')}}
                            >Most bought drugs</label>
                            }
                        </div>
                        {(user?.userType === 'ADMIN') &&
                            <div className='w-[200px]'> 
                            <Button label={"ADD USER"} onClick={() => {}} />
                            </div>
                        }
                    </div>

                    <div className='mt-6 px-8'>
                        <Table data={medicalData} />
                    </div>
                </div>
            </Layout>
    )
}

export default Dashboard;