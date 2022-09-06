export interface User {
  _id: string;
  email: string;
  name: string;
}

export interface LoginResponse {
  success: boolean;
  entry: User;
}
