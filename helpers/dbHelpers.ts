import { prisma } from "@/lib/db";

export const dbHelpers = {
  findAll: async <T>(model: { findMany: () => Promise<T[]> }): Promise<T[]> => {
    return model.findMany();
  },

  findById: async <T>(model: { findUnique: (args: { where: { id: string } }) => Promise<T | null> }, id: string): Promise<T | null> => {
    return model.findUnique({ where: { id } });
  },

  create: async <T>(model: { create: (args: { data: object }) => Promise<T> }, data: object): Promise<T> => {
    return model.create({ data });
  },

  update: async <T>(model: { update: (args: { where: { id: string }; data: object }) => Promise<T> }, id: string, data: object): Promise<T> => {
    return model.update({ where: { id }, data });
  },

  delete: async <T>(model: { delete: (args: { where: { id: string } }) => Promise<T> }, id: string): Promise<T> => {
    return model.delete({ where: { id } });
  },
};

export default prisma;
