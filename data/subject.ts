import { PrismaClient } from "@prisma/client";
import { SubjectCreateInput, SubjectUpdateInput, SubjectWhereUniqueInput, SubjectWhereInput } from "@/types/subject";

const prisma = new PrismaClient();

export const subjectData = {
  create: async (data: SubjectCreateInput) => {
    try {
      return await prisma.subject.create({ data });
    } catch (error: unknown) {
      throw new Error(error instanceof Error ? "Error creating subject: " + error.message : "Unknown error occurred while creating subject");
    }
  },

  update: async (where: SubjectWhereUniqueInput, data: SubjectUpdateInput) => {
    try {
      return await prisma.subject.update({ where, data });
    } catch (error: unknown) {
      throw new Error(error instanceof Error ? "Error updating subject: " + error.message : "Unknown error occurred while updating subject");
    }
  },

  findById: async (where: SubjectWhereUniqueInput) => {
    try {
      return await prisma.subject.findUnique({ where });
    } catch (error: unknown) {
      throw new Error(error instanceof Error ? "Error finding subject: " + error.message : "Unknown error occurred while finding subject");
    }
  },

  findAll: async () => {
    try {
      return await prisma.subject.findMany({
        include: {
          teacher: true, 
        },
      });
    } catch (error: unknown) {
      throw new Error(error instanceof Error ? "Error finding all subjects: " + error.message : "Unknown error occurred while finding all subjects");
    }
  },
  

  find: async (where: SubjectWhereInput) => {
    try {
      return await prisma.subject.findMany({ where });
    } catch (error: unknown) {
      throw new Error(error instanceof Error ? "Error finding subjects: " + error.message : "Unknown error occurred while finding subjects");
    }
  },

  delete: async (where: SubjectWhereUniqueInput) => {
    try {
      return await prisma.subject.delete({ where });
    } catch (error: unknown) {
      throw new Error(error instanceof Error ? "Error deleting subject: " + error.message : "Unknown error occurred while deleting subject");
    }
  },
};
