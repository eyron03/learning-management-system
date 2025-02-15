import { prisma } from "@/lib/db";
import { Prisma, Admin, UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateUsername } from "@/lib/functions/generateUsername";
import { AdminCreateInput } from "@/types/admin"; // ✅ Import Type

export const adminData = {
  async findAll(): Promise<Admin[]> {
    try {
      return await prisma.admin.findMany();
    } catch (error) {
      throw new Error(`Error fetching admins: ${(error as Error).message}`);
    }
  },

  async findById(id: string): Promise<Admin | null> {
    try {
      return await prisma.admin.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error finding admin: ${(error as Error).message}`);
    }
  },

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

  async update(id: string, data: Prisma.AdminUpdateInput): Promise<Admin> {
    try {
      return await prisma.admin.update({ where: { id }, data });
    } catch (error) {
      throw new Error(`Error updating admin: ${(error as Error).message}`);
    }
  },

  async delete(id: string): Promise<Admin> {
    try {
      return await prisma.admin.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error deleting admin: ${(error as Error).message}`);
    }
  },
};
