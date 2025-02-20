import { PrismaClient,   } from "@prisma/client";
import { CivilStatus, NameSuffix } from "@/helpers/enums"; 

import {
  StudentApplicationCreateInput,
  StudentApplicationUpdateInput,
  StudentApplicationWhereUniqueInput,
  StudentApplicationWhereInput,
} from "@/types/student-application";

const prisma = new PrismaClient();

export const studentApplicationData = {
  create: async (data: StudentApplicationCreateInput) => {
    try {
      return await prisma.studentApplication.create({
        data: {
          first_name: data.first_name,
          middle_name: data.middle_name || null,
          last_name: data.last_name,
          suffix: data.suffix as NameSuffix || null,
          gender: data.gender,
          civil_status: data.civil_status as CivilStatus || null,
          date_of_birth: data.date_of_birth,
          birth_place: data.birth_place,
          nationality: data.nationality,
          email: data.email,
          phone_number: data.phone_number,
          tel_number: data.tel_number || null,
          permanent_address: data.permanent_address,
          current_address: data.current_address,
          postal_code: data.postal_code,
          father_id: data.father_id || null,
          mother_id: data.mother_id || null,
          guardian_id: data.guardian_id || null,
          medical_record_id: data.medical_record_id || null,
        },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error creating student application: " + error.message
          : "Unknown error occurred while creating student application"
      );
    }
  },

  update: async (where: StudentApplicationWhereUniqueInput, data: StudentApplicationUpdateInput) => {
    try {
      return await prisma.studentApplication.update({
        where,
        data: {
          first_name: data.first_name,
          middle_name: data.middle_name || null,
          last_name: data.last_name,
          suffix: data.suffix as NameSuffix || null,
          gender: data.gender,
          civil_status: data.civil_status as CivilStatus || null,
          date_of_birth: data.date_of_birth,
          birth_place: data.birth_place,
          nationality: data.nationality,
          email: data.email,
          phone_number: data.phone_number,
          tel_number: data.tel_number || null,
          permanent_address: data.permanent_address,
          current_address: data.current_address,
          postal_code: data.postal_code,
          father_id: data.father_id || null,
          mother_id: data.mother_id || null,
          guardian_id: data.guardian_id || null,
          medical_record_id: data.medical_record_id || null,
        },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error updating student application: " + error.message
          : "Unknown error occurred while updating student application"
      );
    }
  },

  findById: async (where: StudentApplicationWhereUniqueInput) => {
    try {
      return await prisma.studentApplication.findUnique({
        where,
        include: {
          father: true,
          mother: true,
          guardian: true,
          medical_record: true,
          admission: true,
        },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding student application: " + error.message
          : "Unknown error occurred while finding student application"
      );
    }
  },

  findAll: async () => {
    try {
      return await prisma.studentApplication.findMany({
        include: {
          father: true,
          mother: true,
          guardian: true,
          medical_record: true,
          admission: true,
        },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding all student applications: " + error.message
          : "Unknown error occurred while finding all student applications"
      );
    }
  },

  find: async (where: StudentApplicationWhereInput) => {
    try {
      return await prisma.studentApplication.findMany({
        where,
        include: {
          father: true,
          mother: true,
          guardian: true,
          medical_record: true,
          admission: true,
        },
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error finding student applications: " + error.message
          : "Unknown error occurred while finding student applications"
      );
    }
  },

  delete: async (where: StudentApplicationWhereUniqueInput) => {
    try {
      return await prisma.studentApplication.delete({
        where,
      });
    } catch (error: unknown) {
      throw new Error(
        error instanceof Error
          ? "Error deleting student application: " + error.message
          : "Unknown error occurred while deleting student application"
      );
    }
  },
};

