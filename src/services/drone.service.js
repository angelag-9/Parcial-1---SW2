import { droneRepository } from '../repositories/drone.repository.js';

const requiredFields = ['serial', 'modelo', 'fabricante', 'peso'];

export const createDroneService = (repository = droneRepository) => ({
  findAllDrones: async () => repository.findAll(),

  findDroneById: async (id) => {
    if (!id) throw new Error('Drone id is required');
    return repository.findById(id);
  },

  createDrone: async (data) => {
    const missing = requiredFields.filter((field) => !data?.[field] && data?.[field] !== 0);

    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }

    if (typeof data.peso !== 'number' || Number.isNaN(data.peso)) {
      throw new Error('Drone weight must be a valid number');
    }

    return repository.create({
      serial: String(data.serial).trim(),
      modelo: String(data.modelo).trim(),
      fabricante: String(data.fabricante).trim(),
      peso: Number(data.peso),
    });
  },

  updateDrone: async (id, data) => {
    if (!id) throw new Error('Drone id is required');

    const payload = { ...data };
    if (payload.serial !== undefined) payload.serial = String(payload.serial).trim();
    if (payload.modelo !== undefined) payload.modelo = String(payload.modelo).trim();
    if (payload.fabricante !== undefined) payload.fabricante = String(payload.fabricante).trim();
    if (payload.peso !== undefined) {
      if (typeof payload.peso !== 'number' || Number.isNaN(payload.peso)) {
        throw new Error('Drone weight must be a valid number');
      }
      payload.peso = Number(payload.peso);
    }

    return repository.update(id, payload);
  },

  deleteDrone: async (id) => {
    if (!id) throw new Error('Drone id is required');
    return repository.delete(id);
  },
});

const droneService = createDroneService();

export const {
  findAllDrones,
  findDroneById,
  createDrone,
  updateDrone,
  deleteDrone,
} = droneService;
