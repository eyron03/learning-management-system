export interface StudentApplicationData {
    control_no: string;
    first_name: string;
    middle_name?: string;
    last_name: string;
    suffix?: string;
    gender: string;
    date_of_birth: string;
    birth_place: string;
    nationality: string;
    email: string;
    phone_number: string;
    tel_number?: string;
    religion: string;
    medical_record?: MedicalRecordData;
    admission?: AdmissionData;
    home_address?: HomeAddressData;
    family_background?: FamilyBackgroundData;
  }
  
  export interface MedicalRecordData {
    id?: string;
    has_medical_condition: boolean;
    medical_condition?: string;
  }
  
  export interface AdmissionData {
    id?: string;
    admission_type: string;
    intended_grade_level: string;
    previous_school?: SchoolData;
    status?: string;
  }
  
  export interface HomeAddressData {
    id?: string;
    street: string;
    city: string;
    province: string;
    postal_code: string;
  }
  
  export interface FamilyBackgroundData {
    id?: string;
    father_first_name?: string;
    father_middle_name?: string;
    father_last_name?: string;
    father_occupation?: string;
    father_civil_status?: string;
    father_annual_income?: number;
    father_phone_number?: string;
    father_deceased?: boolean;
  
    mother_first_name?: string;
    mother_middle_name?: string;
    mother_last_name?: string;
    mother_occupation?: string;
    mother_civil_status?: string;
    mother_annual_income?: number;
    mother_phone_number?: string;
    mother_deceased?: boolean;
  
    guardian_first_name?: string;
    guardian_middle_name?: string;
    guardian_last_name?: string;
    guardian_occupation?: string;
    guardian_annual_income?: number;
    guardian_phone_number?: string;
  }
  
  export interface SchoolData {
    id?: string;
    name: string;
    address: string;
    last_year_level?: string;
    last_school_year?: string;
    general_weighted_average?: number;
  }
  