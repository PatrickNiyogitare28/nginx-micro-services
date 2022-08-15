import axios from "axios"
import { ENTRY_SERVICE_URL } from "../constants/api"

export const login = async (data) => {
    return axios.post(`${ENTRY_SERVICE_URL}/auth/login`, data)
    .then((response) => {
        return response.data
    }
    )
    .catch((error) => {
        return error?.response?.data?.message || error?.message || "Something went wrong"
    })
}

export const register = async (data) => {
    return axios.post(`${ENTRY_SERVICE_URL}/auth/register`, data)
    .then((response) => {
        return response.data
    }
    )
    .catch((error) => {
        return error?.response?.data?.message || error?.message || "Something went wrong"
    }
    )
}