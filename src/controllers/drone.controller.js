import { createDroneService } from '../services/drone.service.js';

export const createDroneController = (service = createDroneService()) => ({
  getAllDrones: async (_req, res) => {
    try {
      const drones = await service.findAllDrones();
      return res.status(200).json({ success: true, data: drones });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  getDroneById: async (req, res) => {
    try {
      const drone = await service.findDroneById(req.params.id);

      if (!drone) {
        return res.status(404).json({ success: false, message: 'Drone not found' });
      }

      return res.status(200).json({ success: true, data: drone });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  createDrone: async (req, res) => {
    try {
      const drone = await service.createDrone(req.body);
      return res.status(201).json({ success: true, message: 'Drone created successfully', data: drone });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  updateDrone: async (req, res) => {
    try {
      const drone = await service.updateDrone(req.params.id, req.body);
      return res.status(200).json({ success: true, message: 'Drone updated successfully', data: drone });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  deleteDrone: async (req, res) => {
    try {
      await service.deleteDrone(req.params.id);
      return res.status(200).json({ success: true, message: 'Drone deleted successfully' });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },
});

const droneController = createDroneController();

export const {
  getAllDrones,
  getDroneById,
  createDrone,
  updateDrone,
  deleteDrone,
} = droneController;
