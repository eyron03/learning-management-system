import { UserRole } from "@prisma/client";

export interface StudentCreateInput {
  email: string;
  name: string;
  middle_name: string;   
  last_name: string;
  password: string;
  phone_number: string;
  date_of_birth: Date;

  classroom_id: string;
  role?: UserRole;
}

export interface StudentUpdateInput {
  email?: string;
  name?: string;
  middle_name?: string;   
  last_name?: string;
  password?: string;
  phone_number?: string;
  date_of_birth?: Date;
  classroom_id?: string;
  role?: UserRole;
}

export interface StudentWhereUniqueInput {
  email: string;
}

export interface StudentWhereInput {
  email?: string;
  name?: string;
  middle_name?: string;   
  last_name?: string;
  phone_number?: string;

  classroom_id?: string;
  role?: UserRole;
}

export interface Student {
  email: string;
  name: string;
    middle_name: string;   
  last_name: string;
  password: string;
  phone_number: string;
  date_of_birth: Date;

  classroom_id: string;
  role?: UserRole;
}
