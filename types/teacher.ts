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
