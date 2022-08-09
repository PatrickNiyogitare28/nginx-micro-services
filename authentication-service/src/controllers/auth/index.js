import axios from 'axios';
import jwt from 'jsonwebtoken';
import { HttpStatus } from '../../utils/status-code';

const ACCOUNT_SERVICE_API_URL = process.env.ACCOUNT_SERVICE_API_URL;

export const register = async (req, res) => {
    const {firstName, lastName, email, password, userType, gender} = req.body;
    return axios.post(`${ACCOUNT_SERVICE_API_URL}/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
        userType,
        gender
    })
    .then(response => {
        return res.status(HttpStatus.OK).json(response.data);
    })
    .catch(error => {
        return res.status(error?.response?.data?.status || HttpStatus.INTERNAL_SERVER_ERROR).json(error.response.data);
    })
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    return axios.post(`${ACCOUNT_SERVICE_API_URL}/auth/signin`, {
        email,
        password
    })
    .then(response => {
        const token = _signToken(response.data);
        return res.status(HttpStatus.OK).json({...response.data, token});
    })
    .catch(error => {
        return res.status(error?.response?.data?.status || HttpStatus.INTERNAL_SERVER_ERROR).json(error.response.data);
    })
    
}

const _signToken = (data) => {
    const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
    return token;
}

export const decodeToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}