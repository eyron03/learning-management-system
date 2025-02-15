import { prisma } from "@/lib/db";
import { Prisma, Student } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateUsername } from "@/lib/functions/generateUsername";
import { StudentCreateInput } from "@/types/student";

export const studentData = {
  async findAll(): Promise<Student[]> {
    return await prisma.student.findMany({ include: { classroom: true } });
  },

  async findById(id: string): Promise<Student | null> {
    return await prisma.student.findUnique({ where: { id }, include: { classroom: true } });
  },

  async create(data: StudentCreateInput): Promise<Student> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const generatedUsername = await generateUsername("STUDENT"); 

    return await prisma.student.create({
      data: {
        email: data.email,
        username: generatedUsername,
        password: hashedPassword,
        phone_number: data.phone_number,
        date_of_birth: data.date_of_birth,
        grade_level: data.grade_level,
        classroomId: data.classroomId,
        role: data.role ?? "STUDENT", 
      },
      include: { classroom: true },
    });
  },

  async update(id: string, data: Prisma.StudentUpdateInput): Promise<Student> {
    return await prisma.student.update({
      where: { id },
      data,
      include: { classroom: true },
    });
  },

  async delete(id: string): Promise<Student> {
    return await prisma.student.delete({ where: { id } });
  },
};
