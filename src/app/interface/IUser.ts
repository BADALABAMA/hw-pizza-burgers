import { userRole } from '../Enum/enum';

export interface IUser {
  login?: string;
  password?: string;
  img?: string;
  isAuthorized?: boolean;
  userRole?: userRole;
}
