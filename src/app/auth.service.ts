import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    console.log(email,password);
    const body = { email, password };
    return this.http.post<string>(this.apiUrl, body);
  }
}
