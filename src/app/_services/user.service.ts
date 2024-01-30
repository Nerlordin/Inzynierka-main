import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetailsDTO } from '../models/user-details.dto';

const API_URL = 'http://localhost:9990/api/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  changePassword(password: string) {
    return this.http.put(`${API_URL}/password`, { password: password })
  }
  constructor(private http: HttpClient) { }


  getInfoAboutProfile() {
    return this.http.get<Observable<UserDetailsDTO>>(`${API_URL}/me/info`);
  }
}