export interface ICredentials {
  identifier: string;
  password: string;
}

export interface IAuthUser {
  jwt: string;
  user: IUser;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}
