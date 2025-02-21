// types/formData.ts

export interface StudentApplicationData {
    first_name: string;
    last_name: string;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  }
  
  export interface AdmissionData {
    admission_type: string;
    intended_grade_level: string;
    previous_school: string;
    // Add other fields from the admission form
  }
  
  export interface FamilyBackgroundData {
    father_first_name: string;
    father_last_name: string;
    father_occupation: string;
    mother_first_name: string;
    mother_last_name: string;
    mother_occupation: string;
    guardian_first_name: string;
    guardian_last_name: string;
    // Add other fields from the family background form
  }
  
  export interface MedicalRecordData {
    medical_conditions: string;
    // Add other fields from the medical record form
  }
  
  export interface SchoolData {
    name: string;
    address: string;
    // Add other fields from the school form
  }
  
  export interface FormData {
    student: StudentApplicationData;
    admission: AdmissionData;
    familyBackground: FamilyBackgroundData;
    medicalRecord: MedicalRecordData;
    school: SchoolData;
  }
  