import { PrismaClient } from "@prisma/client";
import {
  MedicalRecordCreateInput,
  MedicalRecordUpdateInput,
  MedicalRecordWhereUniqueInput,
  MedicalRecordWhereInput,
} from "@/types/medical-record";

const prisma = new PrismaClient();

export const medicalRecordData = {
  create: async (data: MedicalRecordCreateInput) => {
    try {
      return await prisma.medicalRecord.create({
        data: {
          has_medical_condition: data.has_medical_condition,
          medical_condition: data.medical_condition,
          student_applications: data.studentApplicationIds
            ? { connect: data.studentApplicationIds.map((id) => ({ id })) }
            : undefined,
        },
        include: { student_applications: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error creating medical record: " + error.message
          : "Unknown error occurred while creating medical record"
      );
    }
  },

  update: async (
    where: MedicalRecordWhereUniqueInput,
    data: MedicalRecordUpdateInput
  ) => {
    try {
      return await prisma.medicalRecord.update({
        where,
        data: {
          has_medical_condition: data.has_medical_condition,
          medical_condition: data.medical_condition,
          student_applications: data.studentApplicationIds
            ? { set: data.studentApplicationIds.map((id) => ({ id })) }
            : undefined,
        },
        include: { student_applications: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error updating medical record: " + error.message
          : "Unknown error occurred while updating medical record"
      );
    }
  },

  findById: async (where: MedicalRecordWhereUniqueInput) => {
    try {
      return await prisma.medicalRecord.findUnique({
        where,
        include: { student_applications: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding medical record: " + error.message
          : "Unknown error occurred while finding medical record"
      );
    }
  },

  findAll: async (where?: MedicalRecordWhereInput) => {
    try {
      return await prisma.medicalRecord.findMany({
        where,
        include: { student_applications: true },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding medical records: " + error.message
          : "Unknown error occurred while finding medical records"
      );
    }
  },
  
  delete: async (where: MedicalRecordWhereUniqueInput) => {
    try {
      return await prisma.medicalRecord.delete({
        where,
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error deleting medical record: " + error.message
          : "Unknown error occurred while deleting medical record"
      );
    }
  },
};
