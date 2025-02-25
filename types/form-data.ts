export interface StudentApplicationData {
  control_no: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  gender: string;
  date_of_birth: string;
  birth_place: string;
  nationality: string;
  email: string;
  phone_number: string;
  tel_number: string;
  religion: string;
}

export interface HomeAddressData {
  street: string;
  city: string;
  province: string;
  postal_code: string;
  student_application_id: string;
}

export interface AdmissionData {
  admission_type: string;
  intended_grade_level: string;
  previous_school: string;
  previous_school_id: string;
  status: string;
}

export interface ParentGuardianData {
  father_first_name: string;
  father_middle_name: string;
  father_last_name: string;
  father_occupation: string;
  father_annual_income: string;
  father_phone_number: string;
  father_deceased: boolean;
  mother_first_name: string;
  mother_middle_name: string;
  mother_last_name: string;
  mother_occupation: string;
  mother_annual_income: string;
  mother_phone_number: string;
  mother_deceased: boolean;
  guardian_first_name: string;
  guardian_middle_name: string;
  guardian_last_name: string;
  guardian_occupation: string;
  guardian_annual_income: string;
  guardian_phone_number: string;
}

export interface MedicalRecordData {
  medical_condition: string;
}

export interface SchoolData {
  medical_condition: string;
}

export interface FormData {
  studentApplication: StudentApplicationData;
  homeAddress: HomeAddressData;
  admission: AdmissionData;
  parentGuardian: ParentGuardianData;
  medicalRecord: MedicalRecordData;
  school: SchoolData;
}
