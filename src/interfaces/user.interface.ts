export interface User {
  _id: string;
  email: string;
}

export interface LoginResponse {
  success: boolean;
  entry: User;
}
