import { UserRole } from "@prisma/client";

export interface TeacherCreateInput {
  email: string;
  name: string;        
  last_name: string;   
  password: string;
  phone_number: string;
  address: string;
  role?: UserRole;
  date_of_birth: Date;
  subject_id?: string;   
  classroom_id?: string; 
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
  subject_id?: string;
  classroom_id?: string;
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
  subject_id?: string;
  classroom_id?: string;
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
  subject_id?: string;
  classroom_id?: string;
}
