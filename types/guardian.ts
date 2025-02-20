import { StudentApplication } from "./student-application";

export interface GuardianCreateInput {
  name: string;
  relation: string;
  phone_number: string;
  studentIds?: string[]; // IDs of students linked to this guardian
}

export interface GuardianUpdateInput {
  name?: string;
  relation?: string;
  phone_number?: string;
  studentIds?: string[];
}

export interface GuardianWhereUniqueInput {
  id: string;
}

export interface GuardianWhereInput {
  name?: string;
  relation?: string;
  phone_number?: string;
}

export interface Guardian {
  id: string;
  name: string;
  relation: string;
  phone_number: string;
  students?: StudentApplication[]; // Relationship to StudentApplication
}
