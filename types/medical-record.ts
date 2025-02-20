import { StudentApplication } from "./student-application";

export interface MedicalRecordCreateInput {
  has_medical_condition: boolean;
  medical_condition?: string;
  studentApplicationIds?: string[]; // IDs of students linked to this medical record
}

export interface MedicalRecordUpdateInput {
  has_medical_condition?: boolean;
  medical_condition?: string;
  studentApplicationIds?: string[];
}

export interface MedicalRecordWhereUniqueInput {
  id: string;
}

export interface MedicalRecordWhereInput {
  has_medical_condition?: boolean;
  medical_condition?: string;
}

export interface MedicalRecord {
  id: string;
  has_medical_condition: boolean;
  medical_condition?: string;
  student_applications?: StudentApplication[]; // Relationship to StudentApplication
}
