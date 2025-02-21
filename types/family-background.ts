import { CivilStatus } from "@/helpers/enums";

export interface FamilyBackgroundCreateInput {
  father_first_name?: string;
  father_middle_name?: string;
  father_last_name?: string;
  father_occupation?: string;
  father_civil_status?: CivilStatus;
  father_annual_income?: number;
  father_phone_number?: string;
  father_deceased?: boolean;

  mother_first_name?: string;
  mother_middle_name?: string;
  mother_last_name?: string;
  mother_occupation?: string;
  mother_civil_status?: CivilStatus;
  mother_annual_income?: number;
  mother_phone_number?: string;
  mother_deceased?: boolean;

  guardian_first_name?: string;
  guardian_middle_name?: string;
  guardian_last_name?: string;
  guardian_occupation?: string;
  guardian_annual_income?: number;
  guardian_phone_number?: string;

  student_application_id: string;
}

export interface FamilyBackgroundUpdateInput {
  father_first_name?: string;
  father_middle_name?: string;
  father_last_name?: string;
  father_occupation?: string;
  father_civil_status?: CivilStatus;
  father_annual_income?: number;
  father_phone_number?: string;
  father_deceased?: boolean;

  mother_first_name?: string;
  mother_middle_name?: string;
  mother_last_name?: string;
  mother_occupation?: string;
  mother_civil_status?: CivilStatus;
  mother_annual_income?: number;
  mother_phone_number?: string;
  mother_deceased?: boolean;

  guardian_first_name?: string;
  guardian_middle_name?: string;
  guardian_last_name?: string;
  guardian_occupation?: string;
  guardian_annual_income?: number;
  guardian_phone_number?: string;

  student_application_id?: string;
}

export interface FamilyBackgroundWhereUniqueInput {
  id: string;
}

export interface FamilyBackgroundWhereInput {
  father_last_name?: string;
  mother_last_name?: string;
  guardian_last_name?: string;
  student_application_id?: string;
}
