import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from 'src/app/constants/url';
import {Assessment} from 'src/app/interfaces/assessment';
import {Graph} from 'src/app/interfaces/graph';
import {User} from 'src/app/interfaces/user';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserAssessments() {
    return this.http.get<Assessment[]>(`${API_URL}/userassessments`);
  }

  getUserAssessmentsGraph(id: number) {
    return this.http.get<Graph>(`${API_URL}/userassessments/graph?id=${id}`);
  }

  getUsers() {
    return this.http.get<User[]>(`${API_URL}/users`)
  }
}
