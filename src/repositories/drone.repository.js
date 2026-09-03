import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const droneRepository = {
  findAll: async () => {
    return prisma.drone.findMany();
  },

  findById: async (id) => {
    return prisma.drone.findUnique({ where: { id } });
  },

  create: async (data) => {
    return prisma.drone.create({ data });
  },

  update: async (id, data) => {
    return prisma.drone.update({ where: { id }, data });
  },

  delete: async (id) => {
    return prisma.drone.delete({ where: { id } });
  },
};
