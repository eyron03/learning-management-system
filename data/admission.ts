import { prisma } from "@/lib/db";
import { Admission } from "@prisma/client";
import {
  AdmissionCreateInput,
  AdmissionUpdateInput,
  AdmissionWhereUniqueInput,
  AdmissionWhereInput,
} from "@/types/admission";

export const admissionData = {

  async create(data: AdmissionCreateInput): Promise<Admission> {
    try {
      return await prisma.admission.create({ data });
    } catch (error) {
      throw new Error(`Error creating admission: ${(error as Error).message}`);
    }
  },

  async findAll(): Promise<Admission[]> {
    try {
      return await prisma.admission.findMany({
        include: { student: true, previous_school: true },
      });
    } catch (error) {
      throw new Error(`Error fetching admissions: ${(error as Error).message}`);
    }
  },


  async findById(id: string): Promise<Admission | null> {
    try {
      const uniqueInput: AdmissionWhereUniqueInput = { id };
      return await prisma.admission.findUnique({ where: uniqueInput });
    } catch (error) {
      throw new Error(`Error finding admission: ${(error as Error).message}`);
    }
  },


  async update(id: string, data: AdmissionUpdateInput): Promise<Admission> {
    try {
      const uniqueInput: AdmissionWhereUniqueInput = { id };
      return await prisma.admission.update({ where: uniqueInput, data });
    } catch (error) {
      throw new Error(`Error updating admission: ${(error as Error).message}`);
    }
  },

  async delete(id: string): Promise<Admission> {
    try {
      const uniqueInput: AdmissionWhereUniqueInput = { id };
      return await prisma.admission.delete({ where: uniqueInput });
    } catch (error) {
      throw new Error(`Error deleting admission: ${(error as Error).message}`);
    }
  },


  async search(filters: AdmissionWhereInput): Promise<Admission[]> {
    try {
      return await prisma.admission.findMany({ where: filters });
    } catch (error) {
      throw new Error(`Error searching admissions: ${(error as Error).message}`);
    }
  },
};
