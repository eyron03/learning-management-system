import { prisma } from "@/lib/db";
import { Admin, UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateUsername } from "@/lib/functions/generateUsername";
import { AdminCreateInput, AdminUpdateInput, AdminWhereUniqueInput, AdminWhereInput } from "@/types/admin";

export const adminData = {

  async create(data: AdminCreateInput): Promise<Admin> {
    try {
      if (!Object.values(UserRole).includes(data.role)) {
        throw new Error(`Invalid role: ${data.role}`);
      }

      const hashedPassword = await bcrypt.hash(data.password, 10);
      const generatedUsername = await generateUsername(data.role);

      return await prisma.admin.create({
        data: {
          email: data.email,
          username: generatedUsername,
          password: hashedPassword,
          role: data.role,
        },
      });
    } catch (error) {
      throw new Error(`Error creating admin: ${(error as Error).message}`);
    }
  },

  async findAll(): Promise<Admin[]> {
    try {
      return await prisma.admin.findMany();
    } catch (error) {
      throw new Error(`Error fetching admins: ${(error as Error).message}`);
    }
  },

 
  async findById(id: string): Promise<Admin | null> {
    try {
      const uniqueInput: AdminWhereUniqueInput = { id };
      return await prisma.admin.findUnique({ where: uniqueInput });
    } catch (error) {
      throw new Error(`Error finding admin: ${(error as Error).message}`);
    }
  },

  
  async update(id: string, data: AdminUpdateInput): Promise<Admin> {
    try {
      const uniqueInput: AdminWhereUniqueInput = { id };
      return await prisma.admin.update({ where: uniqueInput, data });
    } catch (error) {
      throw new Error(`Error updating admin: ${(error as Error).message}`);
    }
  },

  
  async delete(id: string): Promise<Admin> {
    try {
      const uniqueInput: AdminWhereUniqueInput = { id };
      return await prisma.admin.delete({ where: uniqueInput });
    } catch (error) {
      throw new Error(`Error deleting admin: ${(error as Error).message}`);
    }
  },

  
  async search(filters: AdminWhereInput): Promise<Admin[]> {
    try {
      return await prisma.admin.findMany({ where: filters });
    } catch (error) {
      throw new Error(`Error searching admins: ${(error as Error).message}`);
    }
  }
};
