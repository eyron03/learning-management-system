import { PrismaClient } from "@prisma/client";
import { GradeLevel } from "@/enums/grade-level";  // Import GradeLevel enum
import { ClassroomCreateInput, ClassroomUpdateInput, ClassroomWhereUniqueInput, ClassroomWhereInput } from "@/types/classroom";

const prisma = new PrismaClient();

export const classroomData = {
  create: async (data: ClassroomCreateInput) => {
    try {
      return await prisma.classroom.create({
        data: {
          name: data.name,
          grade_level: data.grade_level as GradeLevel, // Use the imported GradeLevel enum
          teacherId: data.teacherId || null,
        },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error creating classroom: " + error.message
          : "Unknown error occurred while creating classroom"
      );
    }
  },

  update: async (where: ClassroomWhereUniqueInput, data: ClassroomUpdateInput) => {
    try {
      return await prisma.classroom.update({
        where,
        data: {
          name: data.name,
          grade_level: data.grade_level as GradeLevel, // Use the imported GradeLevel enum
          teacherId: data.teacherId ?? null,
        },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error updating classroom: " + error.message
          : "Unknown error occurred while updating classroom"
      );
    }
  },

  findById: async (where: ClassroomWhereUniqueInput) => {
    try {
      return await prisma.classroom.findUnique({
        where,
        include: { students: true, teacher: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding classroom: " + error.message
          : "Unknown error occurred while finding classroom"
      );
    }
  },

  findAll: async () => {
    try {
      return await prisma.classroom.findMany({
        include: { students: true, teacher: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding all classrooms: " + error.message
          : "Unknown error occurred while finding all classrooms"
      );
    }
  },

  find: async (where: ClassroomWhereInput) => {
    try {
      return await prisma.classroom.findMany({
        where,
        include: { students: true, teacher: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding classrooms: " + error.message
          : "Unknown error occurred while finding classrooms"
      );
    }
  },

  delete: async (where: ClassroomWhereUniqueInput) => {
    try {
      return await prisma.classroom.delete({
        where,
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error deleting classroom: " + error.message
          : "Unknown error occurred while deleting classroom"
      );
    }
  },
};
