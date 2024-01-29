// // train.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TrainService {
//   private apiUrl = 'http://localhost:8080/regEmp';
 

//   constructor(private http: HttpClient) {
//   }
//   registerUser(user: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, user);
//   }
  
// }
// train.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainService {
  public selectedFromStation: string = '';
  public selectedToStation: string = '';
  public selectedDateOfTravel: string = '';
  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/regEmp', user);
  }

  
}

