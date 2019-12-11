export interface IUser {
  id: number;
  token: string;
  fakeToken: string;
  name: IName;
  login: string;
  password: string;
}

export interface IName {
  first: string;
  last: string;
}
