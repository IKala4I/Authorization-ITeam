import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from 'src/app/constants/url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login() {
    return this.http.post(`${API_URL}/login`, { "email":"admin@deepersignals.com", "password":"password" });
  }
}
