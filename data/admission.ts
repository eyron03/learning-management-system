import { PrismaClient} from "@prisma/client";
import {AdmissionType, AdmissionStatus } from "@/helpers/enums";
import {
  AdmissionCreateInput,
  AdmissionUpdateInput,
  AdmissionWhereUniqueInput,
  AdmissionWhereInput,
} from "@/types/admission";

const prisma = new PrismaClient();

export const admissionData = {
  create: async (data: AdmissionCreateInput) => {
    try {
      return await prisma.admission.create({
        data: {
          student_id: data.student_id,
          admission_type: data.admission_type as AdmissionType,
          intended_grade_level: data.intended_grade_level,
          previous_school_id: data.previous_school_id || null,
          status: data.status ?? AdmissionStatus.PENDING,
        },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error creating admission: " + error.message
          : "Unknown error occurred while creating admission"
      );
    }
  },

  update: async (where: AdmissionWhereUniqueInput, data: AdmissionUpdateInput) => {
    try {
      return await prisma.admission.update({
        where,
        data: {
          student_id: data.student_id,
          admission_type: data.admission_type as AdmissionType,
          intended_grade_level: data.intended_grade_level,
          previous_school_id: data.previous_school_id ?? null,
          status: data.status as AdmissionStatus,
        },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error updating admission: " + error.message
          : "Unknown error occurred while updating admission"
      );
    }
  },

  findById: async (where: AdmissionWhereUniqueInput) => {
    try {
      return await prisma.admission.findUnique({
        where,
        include: { student: true, previous_school: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding admission: " + error.message
          : "Unknown error occurred while finding admission"
      );
    }
  },

  findAll: async () => {
    try {
      return await prisma.admission.findMany({
        include: { student: true, previous_school: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding all admissions: " + error.message
          : "Unknown error occurred while finding all admissions"
      );
    }
  },

  find: async (where: AdmissionWhereInput) => {
    try {
      return await prisma.admission.findMany({
        where,
        include: { student: true, previous_school: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding admissions: " + error.message
          : "Unknown error occurred while finding admissions"
      );
    }
  },

  delete: async (where: AdmissionWhereUniqueInput) => {
    try {
      return await prisma.admission.delete({
        where,
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error deleting admission: " + error.message
          : "Unknown error occurred while deleting admission"
      );
    }
  },
};