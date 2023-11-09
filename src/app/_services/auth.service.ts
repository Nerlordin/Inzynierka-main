import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9990/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    return this.http.post<string>(
      AUTH_API + 'login',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(firstName: string,lastName: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        firstName,lastName,
        email,
        password,
      },
      httpOptions
    );
  }
  checkEmail(email: string) {
    const params = new HttpParams().set('email', email);
    return this.http.get(`${AUTH_API}check/email`, { params });
  }


}