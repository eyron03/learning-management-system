import { CivilStatus, NameSuffix } from "@prisma/client";

export interface StudentApplicationCreateInput {
  first_name: string;
  middle_name?: string;
  last_name: string;
  suffix?: NameSuffix;
  gender: string;
  civil_status?: CivilStatus;
  date_of_birth: Date;
  birth_place: string;
  nationality: string;
  email: string;
  phone_number: string;
  tel_number?: string;
  permanent_address: string;
  current_address: string;
  postal_code: string;
  father_id?: string;
  mother_id?: string;
  guardian_id?: string;
  medical_record_id?: string;
}

export interface StudentApplicationUpdateInput {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  suffix?: NameSuffix;
  gender?: string;
  civil_status?: CivilStatus;
  date_of_birth?: Date;
  birth_place?: string;
  nationality?: string;
  email?: string;
  phone_number?: string;
  tel_number?: string;
  permanent_address?: string;
  current_address?: string;
  postal_code?: string;
  father_id?: string;
  mother_id?: string;
  guardian_id?: string;
  medical_record_id?: string;
}

export interface StudentApplicationWhereUniqueInput {
  email: string;
}

export interface StudentApplicationWhereInput {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  suffix?: NameSuffix;
  gender?: string;
  civil_status?: CivilStatus;
  date_of_birth?: Date;
  birth_place?: string;
  nationality?: string;
  email?: string;
  phone_number?: string;
  tel_number?: string;
  permanent_address?: string;
  current_address?: string;
  postal_code?: string;
  father_id?: string;
  mother_id?: string;
  guardian_id?: string;
  medical_record_id?: string;
}

export interface StudentApplication {
  id: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  suffix?: NameSuffix;
  gender: string;
  civil_status?: CivilStatus;
  date_of_birth: Date;
  birth_place: string;
  nationality: string;
  email: string;
  phone_number: string;
  tel_number?: string;
  permanent_address: string;
  current_address: string;
  postal_code: string;
  father_id?: string;
  mother_id?: string;
  guardian_id?: string;
  medical_record_id?: string;
  created_at: Date;
  updated_at: Date;
}
