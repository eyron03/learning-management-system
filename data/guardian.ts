import { PrismaClient } from "@prisma/client";
import {
  GuardianCreateInput,
  GuardianUpdateInput,
  GuardianWhereUniqueInput,
  GuardianWhereInput,
} from "@/types/guardian";

const prisma = new PrismaClient();

export const guardianData = {
  create: async (data: GuardianCreateInput) => {
    try {
      return await prisma.guardian.create({
        data: {
          name: data.name,
          relation: data.relation,
          phone_number: data.phone_number,
          students: data.studentIds
            ? { connect: data.studentIds.map((id) => ({ id })) }
            : undefined,
        },
        include: { students: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error creating guardian: " + error.message
          : "Unknown error occurred while creating guardian"
      );
    }
  },

  update: async (where: GuardianWhereUniqueInput, data: GuardianUpdateInput) => {
    try {
      return await prisma.guardian.update({
        where,
        data: {
          name: data.name,
          relation: data.relation,
          phone_number: data.phone_number,
          students: data.studentIds
            ? { set: data.studentIds.map((id) => ({ id })) }
            : undefined,
        },
        include: { students: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error updating guardian: " + error.message
          : "Unknown error occurred while updating guardian"
      );
    }
  },

  findById: async (where: GuardianWhereUniqueInput) => {
    try {
      return await prisma.guardian.findUnique({
        where,
        include: { students: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding guardian: " + error.message
          : "Unknown error occurred while finding guardian"
      );
    }
  },

  findAll: async (where?: GuardianWhereInput) => {
    try {
      return await prisma.guardian.findMany({
        where,
        include: { students: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding all guardians: " + error.message
          : "Unknown error occurred while finding all guardians"
      );
    }
  },
  

  delete: async (where: GuardianWhereUniqueInput) => {
    try {
      return await prisma.guardian.delete({
        where,
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error deleting guardian: " + error.message
          : "Unknown error occurred while deleting guardian"
      );
    }
  },
};
