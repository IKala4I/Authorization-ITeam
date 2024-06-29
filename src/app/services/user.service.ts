import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocalStorageService} from 'src/app/services/local-storage.service';
import {API_URL} from 'src/app/constants/url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  getUserAssessments(){
    return this.http.get(`${API_URL}/userassessments`);
  }
}
