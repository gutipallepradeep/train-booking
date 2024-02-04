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

 constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/regEmp', user);
  }

  private apiUrl = 'http://localhost:8080/showusers';


  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
}
private baseUrl = 'http://localhost:8080/';
deleteUserById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}deleteEmp/${id}`);
}
updateUserById(id: number, user: any): Observable<any> {
  return this.http.put<any>(`${this.baseUrl}updateUser/${id}`, user);
}

private baseUrl5= 'http://localhost:8080/passengers';
addPassenger(passenger: any): Observable<any> {
  return this.http.post(`${this.baseUrl5}`, passenger);
}
private baseUrl6 = 'http://localhost:8080';

getPassengersByEmail(email: string): Observable<any[]> {
  const url = `${this.baseUrl6}/passengers/byEmail?email=${email}`;
  return this.http.get<any[]>(url);
}
cancelTicket(passengerId: number): Observable<void> {
  const url = `${this.baseUrl6}/passengers/${passengerId}/cancel`;
  return this.http.delete<void>(url);
}

getTicketsByEmail(email: string): Observable<any[]> {
  const url = `${this.baseUrl6}/tickets/byEmail?email=${email}`;
  console.log(url);
  return this.http.get<any[]>(url);
}
private baseUrl2 = 'http://localhost:8080';

deletePassengerByName(name: string): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl2}/passengers/deleteByName/${name}`);
}
}
