import { PrismaClient } from "@prisma/client";
import {
  SchoolCreateInput,
  SchoolUpdateInput,
  SchoolWhereUniqueInput,
  SchoolWhereInput,
} from "@/types/school";

const prisma = new PrismaClient();

export const schoolData = {
  create: async (data: SchoolCreateInput) => {
    try {
      return await prisma.school.create({
        data: {
          name: data.name,
          address: data.address,
          last_year_level: data.last_year_level,
          last_school_year: data.last_school_year,
          general_weighted_average: data.general_weighted_average,
          admissions: data.admissionIds
            ? { connect: data.admissionIds.map((id) => ({ id })) }
            : undefined,
        },
        include: { admissions: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error creating school: " + error.message
          : "Unknown error occurred while creating school"
      );
    }
  },

  update: async (where: SchoolWhereUniqueInput, data: SchoolUpdateInput) => {
    try {
      return await prisma.school.update({
        where,
        data: {
          name: data.name,
          address: data.address,
          last_year_level: data.last_year_level,
          last_school_year: data.last_school_year,
          general_weighted_average: data.general_weighted_average,
          admissions: data.admissionIds
            ? { set: data.admissionIds.map((id) => ({ id })) }
            : undefined,
        },
        include: { admissions: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error updating school: " + error.message
          : "Unknown error occurred while updating school"
      );
    }
  },

  findById: async (where: SchoolWhereUniqueInput) => {
    try {
      return await prisma.school.findUnique({
        where,
        include: { admissions: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding school: " + error.message
          : "Unknown error occurred while finding school"
      );
    }
  },

  findAll: async (where?: SchoolWhereInput) => {
    try {
      return await prisma.school.findMany({
        where,
        include: { admissions: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding schools: " + error.message
          : "Unknown error occurred while finding schools"
      );
    }
  },
  

  delete: async (where: SchoolWhereUniqueInput) => {
    try {
      return await prisma.school.delete({
        where,
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error deleting school: " + error.message
          : "Unknown error occurred while deleting school"
      );
    }
  },
};
