import test from 'node:test';
import assert from 'node:assert/strict';

import { createDroneService } from '../src/services/drone.service.js';
import { createDroneController } from '../src/controllers/drone.controller.js';

test('createDroneService creates a valid drone payload through the repository', async () => {
  const repository = {
    create: async (data) => ({ id: 'd-1', ...data }),
  };

  const service = createDroneService(repository);
  const result = await service.createDrone({
    serial: 'SN-001',
    modelo: 'Mavic 3',
    fabricante: 'DJI',
    peso: 0.9,
  });

  assert.deepEqual(result, {
    id: 'd-1',
    serial: 'SN-001',
    modelo: 'Mavic 3',
    fabricante: 'DJI',
    peso: 0.9,
  });
});

test('createDroneController returns a 201 response with the created drone', async () => {
  const service = {
    createDrone: async (data) => ({ id: 'd-2', ...data }),
  };

  const controller = createDroneController(service);
  const req = {
    body: {
      serial: 'SN-002',
      modelo: 'Phantom 4',
      fabricante: 'DJI',
      peso: 1.2,
    },
  };

  const res = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    },
  };

  await controller.createDrone(req, res);

  assert.equal(res.statusCode, 201);
  assert.equal(res.payload.data.serial, 'SN-002');
  assert.equal(res.payload.data.modelo, 'Phantom 4');
});
