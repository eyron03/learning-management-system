import { GradeLevel, UserRole } from "@prisma/client";

export interface StudentCreateInput {
  email: string;
  password: string;
  phone_number: string;
  date_of_birth: Date;
  grade_level: GradeLevel;
  classroomId: string;
  role?: UserRole;
}

export interface StudentUpdateInput {
  email?: string;
  password?: string;
  phone_number?: string;
  date_of_birth?: Date;
  grade_level?: GradeLevel;
  classroomId?: string;
  role?: UserRole;
}

export interface StudentWhereUniqueInput {
  email: string;
}

export interface StudentWhereInput {
  email?: string;
  phone_number?: string;
  grade_level?: GradeLevel;
  classroomId?: string;
  role?: UserRole;
}

export interface Student {
  email: string;
  password: string;
  phone_number: string;
  date_of_birth: Date;
  grade_level: GradeLevel;
  classroomId: string;
  role?: UserRole;
}
