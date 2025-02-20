import { Teacher } from "@prisma/client";

export interface SubjectCreateInput {
  name: string;
  teacher_id?: string;
}

export interface SubjectUpdateInput {
  name?: string;
  teacher_id?: string;
}

export interface SubjectWhereUniqueInput {
  id: string;
}

export interface SubjectWhereInput {
  name?: string;
  teacher_id?: string;
}

export interface Subject {
  id: string;
  name: string;
  teacher_id?: string;
  teacher?: Teacher | null;
}
