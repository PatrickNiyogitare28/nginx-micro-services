import { decodeToken } from "../controllers/auth";
import { HttpStatus } from "../utils/status-code";
import { UserType } from "../utils/user-types";

export const AuthMiddleware = (req, res, next) => {
    try{
        const bearerHeader = req.headers['authorization'];
        const token = bearerHeader.split(' ')[1];
        if(!token) return res.status(HttpStatus.UNAUTHORIZED).json({message: 'Access denied'});
        const decoded = decodeToken(token);
        if(!decoded) return res.status(HttpStatus.UNAUTHORIZED).json({message: 'Access denied'});
        req.user = decoded;
        next();
    }
    catch(e){
        return res.status(HttpStatus.UNAUTHORIZED).json({message: 'Access denied'});
    }
}

export const AdminMiddleware = (req, res, next) => {
   if(!req.user || req?.user.userType !== UserType.ADMIN) return res.status(HttpStatus.UNAUTHORIZED).json({message: 'Access denied'});
   next();
}

export const PatientMiddleware = (req, res, next) => {
    if(!req.user || (req?.user.userType !== UserType.PATIENT && req?.user?.userType !== UserType.ADMIN)) return res.status(HttpStatus.UNAUTHORIZED).json({message: 'Access denied'});
    next();
}

export const PhysicianMiddleware = (req, res, next) => {
    if(!req.user || (req?.user.userType !== UserType.PHYSICIAN && req?.user?.userType !== UserType.ADMIN)) return res.status(HttpStatus.UNAUTHORIZED).json({message: 'Access denied'});
    next();
}

export const PharmacistMiddleware = (req, res, next) => {
    if(!req.user || (req?.user.userType !== UserType.PHARMACIST && req?.user?.userType !== UserType.ADMIN)) return res.status(HttpStatus.UNAUTHORIZED).json({message: 'Access denied'});
    next();
}