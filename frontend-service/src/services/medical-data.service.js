import axios from "axios"
import { ENTRY_SERVICE_URL } from "../constants/api"

export const getMedicalData = async (endpoint) => {
    return axios.get(`${ENTRY_SERVICE_URL}/medical-data/${endpoint}`,{headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }})
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        return error?.response?.data?.message || error?.message || "Something went wrong"
    }
    )
}