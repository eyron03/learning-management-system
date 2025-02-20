import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";
import { generateUsername } from "@/lib/functions/generateUsername";
import { StudentCreateInput, StudentUpdateInput, StudentWhereUniqueInput, StudentWhereInput } from "@/types/student";
import { Student } from "@prisma/client";

export const studentData = {
 
   async findAll(filters?: StudentWhereInput): Promise<Student[]> {
    return await prisma.student.findMany({
      where: filters,
      include: { classroom: true },
    });
  },


  async findById(uniqueInput: StudentWhereUniqueInput): Promise<Student | null> {
    return await prisma.student.findUnique({
      where: uniqueInput,
      include: { classroom: true },
    });
  },

  
  async create(data: StudentCreateInput): Promise<Student> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const generatedUsername = await generateUsername("STUDENT");

    return await prisma.student.create({
      data: {
        email: data.email,
        name: data.name,
        last_name: data.last_name,
        username: generatedUsername,
        password: hashedPassword,
        phone_number: data.phone_number,
        date_of_birth: data.date_of_birth,
        classroomId: data.classroom_id,
        role: data.role ?? "STUDENT", 
      },
      include: { classroom: true },
    });
  },

  
  async update(id: string, data: StudentUpdateInput): Promise<Student> {
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
