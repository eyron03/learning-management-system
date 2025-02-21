import { prisma } from "@/lib/db";
import { FamilyBackground } from "@prisma/client";
import { 
  FamilyBackgroundCreateInput, 
  FamilyBackgroundUpdateInput, 
  FamilyBackgroundWhereUniqueInput, 
  FamilyBackgroundWhereInput 
} from "@/types/family-background";

export const familyBackgroundData = {

  async create(data: FamilyBackgroundCreateInput): Promise<FamilyBackground> {
    try {
      return await prisma.familyBackground.create({ data });
    } catch (error) {
      throw new Error(`Error creating family background: ${(error as Error).message}`);
    }
  },

  async findAll(): Promise<FamilyBackground[]> {
    try {
      return await prisma.familyBackground.findMany();
    } catch (error) {
      throw new Error(`Error fetching family backgrounds: ${(error as Error).message}`);
    }
  },

  async findById(id: string): Promise<FamilyBackground | null> {
    try {
      const uniqueInput: FamilyBackgroundWhereUniqueInput = { id };
      return await prisma.familyBackground.findUnique({ where: uniqueInput });
    } catch (error) {
      throw new Error(`Error finding family background: ${(error as Error).message}`);
    }
  },

  async update(id: string, data: FamilyBackgroundUpdateInput): Promise<FamilyBackground> {
    try {
      const uniqueInput: FamilyBackgroundWhereUniqueInput = { id };
      return await prisma.familyBackground.update({ where: uniqueInput, data });
    } catch (error) {
      throw new Error(`Error updating family background: ${(error as Error).message}`);
    }
  },

  async delete(id: string): Promise<FamilyBackground> {
    try {
      const uniqueInput: FamilyBackgroundWhereUniqueInput = { id };
      return await prisma.familyBackground.delete({ where: uniqueInput });
    } catch (error) {
      throw new Error(`Error deleting family background: ${(error as Error).message}`);
    }
  },

  async search(filters: FamilyBackgroundWhereInput): Promise<FamilyBackground[]> {
    try {
      return await prisma.familyBackground.findMany({ where: filters });
    } catch (error) {
      throw new Error(`Error searching family backgrounds: ${(error as Error).message}`);
    }
  }
};
