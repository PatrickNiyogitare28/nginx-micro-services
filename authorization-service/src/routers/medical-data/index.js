import { Router } from 'express';
import { patientMedicalData, pharmacistMedicalData, physicianMedicalData } from '../../controllers/medical-data-controller';
import { AuthMiddleware, PatientMiddleware, PharmacistMiddleware, PhysicianMiddleware } from '../../middlewares/auth.middleware';

const router = Router();

router.get('/patient-illnesses', AuthMiddleware, PatientMiddleware,patientMedicalData);
router.get('/physicians-missions', AuthMiddleware, PhysicianMiddleware, physicianMedicalData);
router.get('/most-bought-drugs', AuthMiddleware, PharmacistMiddleware ,pharmacistMedicalData);

export default router;