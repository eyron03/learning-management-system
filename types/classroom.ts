import { Teacher, GradeLevel } from "@prisma/client";
import { Student } from "./student";

export interface ClassroomCreateInput {
  name: string;
  grade_level: GradeLevel;
  teacherId?: string;
}

export interface ClassroomUpdateInput {
  name?: string;
  grade_level?: GradeLevel;
  teacherId?: string;
}

export interface ClassroomWhereUniqueInput {
  id: string;
}

export interface ClassroomWhereInput {
  name?: string;
  grade_level?: GradeLevel;
  teacherId?: string;
}

export interface Classroom {
  id: string;
  name: string;
  grade_level: GradeLevel;
  teacherId?: string;
  teacher?: Teacher | null;
  students: Student[];
}
