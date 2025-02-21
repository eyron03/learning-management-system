import { prisma } from "@/lib/db";
import { StudentApplication } from "@prisma/client";
import { 
  StudentApplicationCreateInput, 
  StudentApplicationUpdateInput, 
  StudentApplicationWhereUniqueInput, 
  StudentApplicationWhereInput 
} from "@/types/student-application";

export const studentApplicationData = {

  async create(data: StudentApplicationCreateInput): Promise<StudentApplication> {
    try {
      return await prisma.studentApplication.create({ data });
    } catch (error) {
      throw new Error(`Error creating student application: ${(error as Error).message}`);
    }
  },

  async findAll(): Promise<StudentApplication[]> {
    try {
      return await prisma.studentApplication.findMany();
    } catch (error) {
      throw new Error(`Error fetching student applications: ${(error as Error).message}`);
    }
  },

  async findById(id: string): Promise<StudentApplication | null> {
    try {
      const uniqueInput: StudentApplicationWhereUniqueInput = { id };
      return await prisma.studentApplication.findUnique({ where: uniqueInput });
    } catch (error) {
      throw new Error(`Error finding student application: ${(error as Error).message}`);
    }
  },

  async update(id: string, data: StudentApplicationUpdateInput): Promise<StudentApplication> {
    try {
      const uniqueInput: StudentApplicationWhereUniqueInput = { id };
      return await prisma.studentApplication.update({ where: uniqueInput, data });
    } catch (error) {
      throw new Error(`Error updating student application: ${(error as Error).message}`);
    }
  },

  async delete(id: string): Promise<StudentApplication> {
    try {
      const uniqueInput: StudentApplicationWhereUniqueInput = { id };
      return await prisma.studentApplication.delete({ where: uniqueInput });
    } catch (error) {
      throw new Error(`Error deleting student application: ${(error as Error).message}`);
    }
  },

  async search(filters: StudentApplicationWhereInput): Promise<StudentApplication[]> {
    try {
      return await prisma.studentApplication.findMany({ where: filters });
    } catch (error) {
      throw new Error(`Error searching student applications: ${(error as Error).message}`);
    }
  }
};
