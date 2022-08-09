import xlsx from 'node-xlsx';
import { UserType } from '../utils/user-types';

export const getMedicalDataByRole = (userType) => {
    const obj = xlsx.parse('src/public/Medical-Data.xlsx'); // parses a file

    if(userType == UserType.ADMIN || userType == UserType.PATIENT) return _formatDataInTableLike(obj[0]);
    if(userType == UserType.ADMIN || userType == UserType.PHYSICIAN) return _formatDataInTableLike(obj[1]);
    if(userType == UserType.ADMIN || userType == UserType.PHARMACIST) return _formatDataInTableLike(obj[2]);
    return "No data found";
}

const _formatDataInTableLike = (data) => {
    let formattedData = {
        tableCaption: data.name,
        tableHeaders: data?.data[0],
        tableData: []
    };
    data?.data.forEach((row, index) => {
        if (index > 0) {
            formattedData.tableData.push(row);
        }
    })
    return formattedData;
}