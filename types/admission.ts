import { AdmissionType, AdmissionStatus } from "@prisma/client";

export interface AdmissionCreateInput {
  student_id: string;
  admission_type: AdmissionType;
  intended_grade_level: string;
  previous_school_id?: string;
  status?: AdmissionStatus;
}

export interface AdmissionUpdateInput {
  admission_type?: AdmissionType;
  intended_grade_level?: string;
  previous_school_id?: string;
  status?: AdmissionStatus;
}

export interface AdmissionWhereUniqueInput {
  id: string;
}

export interface AdmissionWhereInput {
  student_id?: string;
  admission_type?: AdmissionType;
  intended_grade_level?: string;
  previous_school_id?: string;
  status?: AdmissionStatus;
}
