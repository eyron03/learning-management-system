export interface HomeAddressCreateInput {
    street: string;
    city: string;
    province: string;
    postal_code: string;
    student_application_id: string;
  }
  
  export interface HomeAddressUpdateInput {
    street?: string;
    city?: string;
    province?: string;
    postal_code?: string;
    student_application_id?: string;
  }
  
  export interface HomeAddressWhereUniqueInput {
    id: string;
  }
  
  export interface HomeAddressWhereInput {
    city?: string;
    province?: string;
    student_application_id?: string;
  }
  