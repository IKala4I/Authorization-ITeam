import {Injectable} from '@angular/core';
import {LocalStorageService} from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private localStorageService: LocalStorageService) {
  }

  hasRole(role: string | string[]): boolean {
    const currentRole = this.localStorageService.getItem('role');

    if(Array.isArray(role))
      return currentRole ? role.includes(currentRole) : false;

    return currentRole === role;
  }

  setUserRole(role: string): void {
    this.localStorageService.setItem('role', role)
  }
}
