import { UserRole } from "@prisma/client";

export interface AdminCreateInput {
  email: string;
  password: string;
  username: string;
  role: UserRole;
}

export interface AdminUpdateInput {
  email?: string;
  password?: string;
  username?: string;
  role?: UserRole;
}

export interface AdminWhereUniqueInput {
  id: string;
}

export interface AdminWhereInput {
  email?: string;
  role?: UserRole;
}
