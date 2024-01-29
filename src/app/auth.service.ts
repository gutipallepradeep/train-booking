import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private showSuccessMessageSource = new BehaviorSubject<boolean>(false);
  showSuccessMessage$ = this.showSuccessMessageSource.asObservable();

  private apiUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    console.log(email,password);
    const body = { email, password };
    return this.http.post<string>(this.apiUrl, body);
  }
  setShowSuccessMessage(value: boolean): void {
    this.showSuccessMessageSource.next(value);
  }
  isLoggedIn(): boolean {
    const isLoggedIn = true;
  console.log('isLoggedIn:', isLoggedIn);
  return isLoggedIn;
    
  }
}
