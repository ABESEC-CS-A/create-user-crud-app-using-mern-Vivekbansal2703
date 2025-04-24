export type UserRole = 'admin' | 'manager' | 'student' | 'teacher';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface UserFormData {
  email: string;
  name: string;
  role: UserRole;
}