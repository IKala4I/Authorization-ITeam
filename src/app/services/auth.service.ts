import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from 'src/app/constants/url';
import {LocalStorageService} from 'src/app/services/local-storage.service';
import {tap} from 'rxjs';
import {LoginResponse} from 'src/app/interfaces/loginResponse';
import {RoleService} from 'src/app/services/role.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService, private roleService: RoleService) {
  }

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>(`${API_URL}/login`, {'email': email, 'password': password})
      .pipe(
        tap(data => {
          this.localStorageService.setItem('token', data.token);
          this.roleService.setUserRole(data.role);
        })
      );
  }
}
