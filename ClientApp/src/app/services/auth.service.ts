import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  login() {
    // for now i am using random number to set userId for session token
    const userId = Math.random().toString();
    return this.http.get<any>(`${environment.servers.api}/Auth/${userId}`);

  }
}
