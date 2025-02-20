import { Admission } from "./admission";

export interface SchoolCreateInput {
  name: string;
  address: string;
  last_year_level?: string;
  last_school_year?: string;
  general_weighted_average?: number;
  admissionIds?: string[]; // IDs of admissions linked to this school
}

export interface SchoolUpdateInput {
  name?: string;
  address?: string;
  last_year_level?: string;
  last_school_year?: string;
  general_weighted_average?: number;
  admissionIds?: string[];
}

export interface SchoolWhereUniqueInput {
  id: string;
}

export interface SchoolWhereInput {
  name?: string;
  address?: string;
  last_year_level?: string;
  last_school_year?: string;
  general_weighted_average?: number;
}

export interface School {
  id: string;
  name: string;
  address: string;
  last_year_level?: string;
  last_school_year?: string;
  general_weighted_average?: number;
  admissions?: Admission[]; // Relationship to Admission
}
