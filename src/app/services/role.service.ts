import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private userRole: string;

  constructor() {
  }

  hasRole(role: string): boolean {
    return this.userRole === role;
  }

  setUserRole(role: string): void {
    this.userRole = role;
  }
}
