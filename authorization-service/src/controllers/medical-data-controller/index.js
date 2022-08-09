import { getMedicalDataByRole } from '../../helpers/extract-xlsx-data'
import { HttpStatus } from '../../utils/status-code';
import { UserType } from '../../utils/user-types';

export const patientMedicalData = (req, res) => {
    const data = getMedicalDataByRole(UserType.PATIENT);
    return res.status(HttpStatus.OK).json(data);
}

export const physicianMedicalData = (req, res) => {
    const data = getMedicalDataByRole(UserType.PHYSICIAN);
    return res.status(HttpStatus.OK).json(data);
}

export const pharmacistMedicalData = (req, res) => {
    const data = getMedicalDataByRole(UserType.PHARMACIST);
    return res.status(HttpStatus.OK).json(data);
}
