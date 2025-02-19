import { prisma } from "@/lib/db";
import { Prisma, Teacher } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateUsername } from "@/lib/functions/generateUsername";
import { TeacherCreateInput } from "@/types/teacher";

export const teacherData = {
  async findAll(): Promise<Teacher[]> {
    return await prisma.teacher.findMany();
  },

  async findById(id: string): Promise<Teacher | null> {
    return await prisma.teacher.findUnique({ where: { id } });
  },

  async create(data: TeacherCreateInput): Promise<Teacher> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const generatedUsername = await generateUsername("TEACHER");
  
    return await prisma.teacher.create({
      data: {
        email: data.email,
        name: data.name, 
        last_name: data.last_name, 
        username: generatedUsername,
        password: hashedPassword,
        phone_number: data.phone_number,
        address: data.address,
        date_of_birth: data.date_of_birth,
        role: data.role ?? "TEACHER",
      },
    });
  },
  

  async update(id: string, data: Prisma.TeacherUpdateInput): Promise<Teacher> {
    return await prisma.teacher.update({ where: { id }, data });
  },

  async delete(id: string): Promise<Teacher> {
    return await prisma.teacher.delete({ where: { id } });
  },
};
