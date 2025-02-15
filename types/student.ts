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
