import type { UserRole } from "../Types/defineTypeUrl";

export const userRoles: UserRole[] = ""
  .split(',')
  .map(id => ({
    userName: id,
    role: "admin"
  }));