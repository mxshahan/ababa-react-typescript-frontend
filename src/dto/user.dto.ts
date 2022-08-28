export interface RegisterUserRequest {
  _id: string;
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
