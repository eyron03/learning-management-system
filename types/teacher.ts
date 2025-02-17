import { UserRole, GradeLevel } from "@prisma/client";

export interface TeacherCreateInput {
  email: string;
  password: string;
  phone_number: string;
  address: string;
  role?: UserRole;
  date_of_birth: Date;
  grade_level: GradeLevel;
}

export interface TeacherUpdateInput {
  email?: string;
  password?: string;
  phone_number?: string;
  address?: string;
  role?: UserRole;
  date_of_birth?: Date;
  grade_level?: GradeLevel;
}

export interface TeacherWhereUniqueInput {
  email: string;
}

export interface TeacherWhereInput {
  email?: string;
  phone_number?: string;
  address?: string;
  date_of_birth?: Date;
  grade_level?: GradeLevel;
}

export interface Teacher {
  email: string;
  password: string;
  phone_number: string;
  address: string;
  role?: UserRole;
  date_of_birth: Date;
  grade_level: GradeLevel;
}
