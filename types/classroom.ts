import { Teacher, GradeLevel } from "@prisma/client";
import { Student } from "./student";

export interface ClassroomCreateInput {
  name: string;
  grade_level: GradeLevel;
  teacher_id?: string | null;
}

export interface ClassroomUpdateInput {
  name?: string;
  grade_level?: GradeLevel;
  teacher_id?: string | null;
}

export interface ClassroomWhereUniqueInput {
  id: string;
}

export interface ClassroomWhereInput {
  name?: string;
  grade_level?: GradeLevel;
  teacher_id?: string | null;
}

export interface Classroom {
  id: string;
  name: string;
  grade_level: GradeLevel;
  teacher_id?: string | null;
  teacher?: Teacher | null;
  students: Student[];
}
