export type AuthResponse = {
  errors?: {
    field: string;
    message: string;
  }[];
  user?: {
    id: string;
    email: string;
  };
}

export type EmptyObject = {
  [key: string]: any;
};