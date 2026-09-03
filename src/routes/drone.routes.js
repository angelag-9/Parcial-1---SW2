import { Router } from 'express';
import {
  getAllDrones,
  getDroneById,
  createDrone,
  updateDrone,
  deleteDrone,
} from '../controllers/drone.controller.js';

const router = Router();

router.get('/', getAllDrones);
router.get('/:id', getDroneById);
router.post('/', createDrone);
router.put('/:id', updateDrone);
router.delete('/:id', deleteDrone);

export default router;
