export interface ParentCreateInput {
    first_name: string;
    middle_name?: string;
    last_name: string;
    occupation: string;
    annual_income?: number;
  }
  
  export interface ParentUpdateInput {
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    occupation?: string;
    annual_income?: number;
  }
  
  export interface ParentWhereUniqueInput {
    id: string;
  }
  
  export interface ParentWhereInput {
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    occupation?: string;
    annual_income?: number;
  }
  
  export interface Parent {
    id: string;
    first_name: string;
    middle_name?: string;
    last_name: string;
    occupation: string;
    annual_income?: number;
  }
  