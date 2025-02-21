export interface MedicalRecordCreateInput {
  has_medical_condition?: boolean;
  medical_condition?: string;
}

export interface MedicalRecordUpdateInput {
  has_medical_condition?: boolean;
  medical_condition?: string;
}

export interface MedicalRecordWhereUniqueInput {
  id: string;
}

export interface MedicalRecordWhereInput {
  has_medical_condition?: boolean;
  medical_condition?: string;
}
