import { prisma } from "@/lib/db";
import { MedicalRecord } from "@prisma/client";
import { 
  MedicalRecordCreateInput, 
  MedicalRecordUpdateInput, 
  MedicalRecordWhereInput 
} from "@/types/medical-record";

export const medicalRecordData = {

  async create(data: MedicalRecordCreateInput): Promise<MedicalRecord> {
    try {
      return await prisma.medicalRecord.create({ data });
    } catch (error) {
      throw new Error(`Error creating medical record: ${(error as Error).message}`);
    }
  },

  async findAll(): Promise<MedicalRecord[]> {
    try {
      return await prisma.medicalRecord.findMany();
    } catch (error) {
      throw new Error(`Error fetching medical records: ${(error as Error).message}`);
    }
  },

  async findById(id: string): Promise<MedicalRecord | null> {
    try {
      return await prisma.medicalRecord.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error finding medical record: ${(error as Error).message}`);
    }
  },

  async update(id: string, data: MedicalRecordUpdateInput): Promise<MedicalRecord> {
    try {
      return await prisma.medicalRecord.update({ where: { id }, data });
    } catch (error) {
      throw new Error(`Error updating medical record: ${(error as Error).message}`);
    }
  },

  async delete(id: string): Promise<MedicalRecord> {
    try {
      return await prisma.medicalRecord.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error deleting medical record: ${(error as Error).message}`);
    }
  },

  async search(filters: MedicalRecordWhereInput): Promise<MedicalRecord[]> {
    try {
      return await prisma.medicalRecord.findMany({ where: filters });
    } catch (error) {
      throw new Error(`Error searching medical records: ${(error as Error).message}`);
    }
  }
};
