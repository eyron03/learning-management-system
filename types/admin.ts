import { UserRole } from "@prisma/client";

export interface AdminCreateInput {
  email: string;
  password: string;
  role: UserRole;
}
