import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') || '');
    const [doctors, setDoctors] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const getAllDoctors = async () => {
    try {
        const { data } = await axios.get(backendUrl + '/api/admin/all-doctors', {
            headers: { aToken }
        });
        if (data.success) {
            setDoctors(data.doctors);
            console.log(data.doctors);
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        toast.error(error.message);
    }
};

    if (!backendUrl) {
        console.warn('⚠️ VITE_BACKEND_URL is not defined in your .env file');
    }

    const value = {
        aToken,
        setAToken,
        backendUrl,
        doctors,
        getAllDoctors
    };

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
