export interface User {
  name: string,
  lastName: string,
  position: string,
  role: string,
  education: string,
  dateOfBirth: string,
}

export interface UserWithId extends User {
  id: number;
}
