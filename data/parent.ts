import { PrismaClient } from "@prisma/client";
import {
  ParentCreateInput,
  ParentUpdateInput,
  ParentWhereUniqueInput,
  ParentWhereInput,
} from "@/types/parent";

const prisma = new PrismaClient();

export const parentData = {
  create: async (data: ParentCreateInput) => {
    try {
      return await prisma.parent.create({
        data: {
          first_name: data.first_name,
          middle_name: data.middle_name || null,
          last_name: data.last_name,
          occupation: data.occupation,
          annual_income: data.annual_income || null,
        },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error creating parent: " + error.message
          : "Unknown error occurred while creating parent"
      );
    }
  },

  update: async (where: ParentWhereUniqueInput, data: ParentUpdateInput) => {
    try {
      return await prisma.parent.update({
        where,
        data: {
          first_name: data.first_name,
          middle_name: data.middle_name || null,
          last_name: data.last_name,
          occupation: data.occupation,
          annual_income: data.annual_income || null,
        },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error updating parent: " + error.message
          : "Unknown error occurred while updating parent"
      );
    }
  },

  findById: async (where: ParentWhereUniqueInput) => {
    try {
      return await prisma.parent.findUnique({
        where,
        include: { children_as_father: true, children_as_mother: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding parent: " + error.message
          : "Unknown error occurred while finding parent"
      );
    }
  },

  findAll: async () => {
    try {
      return await prisma.parent.findMany({
        include: { children_as_father: true, children_as_mother: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding all parents: " + error.message
          : "Unknown error occurred while finding all parents"
      );
    }
  },

  find: async (where: ParentWhereInput) => {
    try {
      return await prisma.parent.findMany({
        where,
        include: { children_as_father: true, children_as_mother: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding parents: " + error.message
          : "Unknown error occurred while finding parents"
      );
    }
  },

  delete: async (where: ParentWhereUniqueInput) => {
    try {
      return await prisma.parent.delete({
        where,
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error deleting parent: " + error.message
          : "Unknown error occurred while deleting parent"
      );
    }
  },
};
