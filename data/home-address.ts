import { prisma } from "@/lib/db";
import { HomeAddress } from "@prisma/client";
import { 
  HomeAddressCreateInput, 
  HomeAddressUpdateInput, 
  HomeAddressWhereUniqueInput, 
  HomeAddressWhereInput 
} from "@/types/home-address";

export const homeAddressData = {

  async create(data: HomeAddressCreateInput): Promise<HomeAddress> {
    try {
      return await prisma.homeAddress.create({ data });
    } catch (error) {
      throw new Error(`Error creating home address: ${(error as Error).message}`);
    }
  },

  async findAll(): Promise<HomeAddress[]> {
    try {
      return await prisma.homeAddress.findMany();
    } catch (error) {
      throw new Error(`Error fetching home addresses: ${(error as Error).message}`);
    }
  },

  async findById(id: string): Promise<HomeAddress | null> {
    try {
      const uniqueInput: HomeAddressWhereUniqueInput = { id };
      return await prisma.homeAddress.findUnique({ where: uniqueInput });
    } catch (error) {
      throw new Error(`Error finding home address: ${(error as Error).message}`);
    }
  },

  async update(id: string, data: HomeAddressUpdateInput): Promise<HomeAddress> {
    try {
      const uniqueInput: HomeAddressWhereUniqueInput = { id };
      return await prisma.homeAddress.update({ where: uniqueInput, data });
    } catch (error) {
      throw new Error(`Error updating home address: ${(error as Error).message}`);
    }
  },

  async delete(id: string): Promise<HomeAddress> {
    try {
      const uniqueInput: HomeAddressWhereUniqueInput = { id };
      return await prisma.homeAddress.delete({ where: uniqueInput });
    } catch (error) {
      throw new Error(`Error deleting home address: ${(error as Error).message}`);
    }
  },

  async search(filters: HomeAddressWhereInput): Promise<HomeAddress[]> {
    try {
      return await prisma.homeAddress.findMany({ where: filters });
    } catch (error) {
      throw new Error(`Error searching home addresses: ${(error as Error).message}`);
    }
  }
};
