export interface SchoolCreateInput {
    name: string;
    address: string;
    last_year_level?: string;
    last_school_year?: string;
    general_weighted_average?: number;
  }
  
  export interface SchoolUpdateInput {
    name?: string;
    address?: string;
    last_year_level?: string;
    last_school_year?: string;
    general_weighted_average?: number;
  }
  
  export interface SchoolWhereUniqueInput {
    id: string;
  }
  
  export interface SchoolWhereInput {
    name?: string;
    address?: string;
      
  }
  
  