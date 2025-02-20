import { Teacher } from "@prisma/client";

export interface SubjectCreateInput {
  name: string;
  teacherId?: string;
}

export interface SubjectUpdateInput {
  name?: string;
  teacherId?: string;
}

export interface SubjectWhereUniqueInput {
  id: string;
}

export interface SubjectWhereInput {
  name?: string;
  teacherId?: string;
}

export interface Subject {
  id: string;
  name: string;
  teacherId?: string;
  teacher?: Teacher | null;
}
