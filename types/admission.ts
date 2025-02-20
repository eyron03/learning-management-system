import { AdmissionStatus, AdmissionType} from "@/helpers/enums";

export interface AdmissionCreateInput {
  student_id: string;
  admission_type: AdmissionType;
  intended_grade_level: string;
  previous_school_id?: string;
  status?: AdmissionStatus;
}

export interface AdmissionUpdateInput {
  student_id?: string;
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

export interface Admission {
  id: string;
  student_id: string;
  admission_type: AdmissionType;
  intended_grade_level: string;
  previous_school_id?: string;
  status: AdmissionStatus;
  created_at: Date;
  updated_at: Date;
}
 