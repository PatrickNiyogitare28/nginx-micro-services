import axios from 'axios'


export const getAllCountries = async () => {
    return axios.get('https://restcountries.com/v2/all')
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log(error)
        return error?.message || "Something went wrong"
    })
}