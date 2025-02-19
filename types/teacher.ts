import { UserRole } from "@prisma/client";

export interface TeacherCreateInput {
  email: string;
  name: string;        // ✅ Added
  last_name: string;   // ✅ Added
  password: string;
  phone_number: string;
  address: string;
  role?: UserRole;
  date_of_birth: Date;
  subjectId?: string;   
  classroomId?: string; 
}

export interface TeacherUpdateInput {
  email?: string;
  name?: string;        
  last_name?: string;   
  password?: string;
  phone_number?: string;
  address?: string;
  role?: UserRole;
  date_of_birth?: Date;
  subjectId?: string;
  classroomId?: string;
}
export interface TeacherWhereUniqueInput {
  email: string;
}

export interface TeacherWhereInput {
  email?: string;
  name?: string;
  last_name?: string;
  username?: string;
  phone_number?: string;
  address?: string;
  date_of_birth?: Date;
  subjectId?: string;
  classroomId?: string;
}

export interface Teacher {
  email: string;
  name: string;
  last_name: string;
  username: string;
  password: string;
  phone_number: string;
  address: string;
  role?: UserRole;
  date_of_birth: Date;
  subjectId?: string;
  classroomId?: string;
}
