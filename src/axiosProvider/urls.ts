import { userRoles } from "./handlers/userRole";
import type { UserRole } from "./Types/defineTypeUrl";

export let URL_BASE: String,
  SUFFIX_BASE: String,
  CDN_BASE: String,
  ROLE: UserRole[] = [];

switch (import.meta.env.VITE_APP_STAGE == "production") {
  case true:
    URL_BASE = "";
    SUFFIX_BASE = "";
    CDN_BASE = "";
    ROLE = userRoles;
    break;
  case false:
    URL_BASE = "";
    SUFFIX_BASE = "";
    CDN_BASE = "";
    ROLE = userRoles;
    break;

  default:
    URL_BASE = "";
    SUFFIX_BASE = "";
    CDN_BASE = "";
    ROLE = userRoles;
    break;
}





