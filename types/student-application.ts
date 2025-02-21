import { NameSuffix } from "@/helpers/enums";

export interface StudentApplicationCreateInput {
  control_no: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  suffix?: NameSuffix;
  gender: string;
  date_of_birth: Date;
  birth_place: string;
  nationality: string;
  email: string;
  phone_number: string;
  tel_number?: string;
  religion: string;
  medical_record_id?: string;
  admission_id?: string;
  home_address_id?: string;
  family_background_id?: string;
}

export interface StudentApplicationUpdateInput {
  control_no?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  suffix?: NameSuffix;
  gender?: string;
  date_of_birth?: Date;
  birth_place?: string;
  nationality?: string;
  email?: string;
  phone_number?: string;
  tel_number?: string;
  religion?: string;
  medical_record_id?: string;
  admission_id?: string;
  home_address_id?: string;
  family_background_id?: string;
}

export interface StudentApplicationWhereUniqueInput {
  id: string;
}

export interface StudentApplicationWhereInput {
  control_no?: string;
  email?: string;
  phone_number?: string;
}
