import { prisma } from "@/lib/db";
import { School } from "@prisma/client";
import { 
  SchoolCreateInput, 
  SchoolUpdateInput, 
  SchoolWhereInput 
} from "@/types/school";

export const schoolData = {

  async create(data: SchoolCreateInput): Promise<School> {
    try {
      return await prisma.school.create({ data });
    } catch (error) {
      throw new Error(`Error creating school: ${(error as Error).message}`);
    }
  },

  async findAll(): Promise<School[]> {
    try {
      return await prisma.school.findMany();
    } catch (error) {
      throw new Error(`Error fetching schools: ${(error as Error).message}`);
    }
  },

  async findById(id: string): Promise<School | null> {
    try {
      return await prisma.school.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error finding school: ${(error as Error).message}`);
    }
  },

  async update(id: string, data: SchoolUpdateInput): Promise<School> {
    try {
      return await prisma.school.update({ where: { id }, data });
    } catch (error) {
      throw new Error(`Error updating school: ${(error as Error).message}`);
    }
  },

  async delete(id: string): Promise<School> {
    try {
      return await prisma.school.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error deleting school: ${(error as Error).message}`);
    }
  },

  async search(filters: SchoolWhereInput): Promise<School[]> {
    try {
      return await prisma.school.findMany({ where: filters });
    } catch (error) {
      throw new Error(`Error searching schools: ${(error as Error).message}`);
    }
  }
};
