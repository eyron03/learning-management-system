import { UserRole } from "@prisma/client";

export interface TeacherCreateInput {
  email: string;
  name: string;
  m_name?: string | null; 
  last_name: string;
  password: string;
  phone_number: string;
  address: string;
  role?: UserRole;
  date_of_birth: Date;
  subjectIds?: string[];
  classroom_id?: string;
}

export interface TeacherUpdateInput {
  email?: string;
  name?: string;
  middle_name?: string;
  last_name?: string;
  password?: string;
  phone_number?: string;
  address?: string;
  role?: UserRole;
  date_of_birth?: Date;
  subjectIds?: string[];
  classroom_id?: string;
}

export interface TeacherWhereUniqueInput {
  id?: string;
  email?: string;
}

export interface TeacherWhereInput {
  id?: string;
  email?: string;
  name?: string;
  middle_name?: string;
  last_name?: string;
  username?: string;
  phone_number?: string;
  address?: string;
  date_of_birth?: Date;
  subjectIds?: string[];
  classroom_id?: string;
}

export interface Teacher {
  id: string;
  email: string;
  name: string;
  middle_name?: string;
  last_name: string;
  username: string;
  password: string;
  phone_number: string;
  address: string;
  role: UserRole;
  date_of_birth: Date;
  subjectIds?: string[];
  classroom_id?: string;
}
export interface TeacherWhereUniqueInput {
  id?: string;
  email?: string;
  username?: string;
}