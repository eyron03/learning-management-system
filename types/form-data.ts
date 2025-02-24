export interface FormData {
  student: {
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
  };
  medicalRecord: {
    has_medical_condition: boolean;
    medical_condition?: string;
  };
  admission: {
    admission_type: string;
    intended_grade_level: string;
    previous_school_id?: string;
  };
  homeAddress: {
    street: string;
    city: string;
    province: string;
    postal_code: string;
  };
  familyBackground: {
    father: {
      first_name?: string;
      middle_name?: string;
      last_name?: string;
      occupation?: string;
      civil_status?: string;
      annual_income?: number;
      phone_number?: string;
      deceased?: boolean;
    };
    mother: {
      first_name?: string;
      middle_name?: string;
      last_name?: string;
      occupation?: string;
      civil_status?: string;
      annual_income?: number;
      phone_number?: string;
      deceased?: boolean;
    };
    guardian: {
      first_name?: string;
      middle_name?: string;
      last_name?: string;
      occupation?: string;
      annual_income?: number;
      phone_number?: string;
    };
  };
  school: {
    name: string;
    address: string;
    last_year_level?: string;
    last_school_year?: string;
    general_weighted_average?: number;
  };
}
