import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SatstogoService {
  // private apiUrl = 'https://backend-satstogo-production.up.railway.app/api/withdraw';
  // private authUrl = 'https://backend-satstogo-production.up.railway.app/api/auth';
  private apiUrl = 'http://localhost:8000/api/withdraw';
  private authUrl = 'http://localhost:8000/api/auth';
  private authLogin = 'http://localhost:8000/api/auth-login';
  private authVerify = 'https://70db-105-74-14-20.ngrok-free.app/api/auth-verify';


  // private authUrl = 'https://a160-41-140-78-251.ngrok-free.app/api/auth';
  // private authLogin = 'https://a160-41-140-78-251.ngrok-free.app/api/auth-login';
  // private authVerify = 'https://a160-41-140-78-251.ngrok-free.app/api/auth-verify';



    constructor(private http: HttpClient) {}
  
    generateLnurl(params: any): Observable<any> {
      // Use HttpParams for GET request query parameters
      let httpParams = new HttpParams();
      Object.keys(params).forEach(key => {
        httpParams = httpParams.append(key, params[key]);
      });
  
      return this.http.get(this.apiUrl, { params: httpParams });
    }

    generateAuth(): Observable<any> {
      return this.http.get(this.authUrl);
    }

  auth_login(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      httpParams = httpParams.append(key, params[key]);
    });

    return this.http.get(this.authLogin);
    }

  auth_verify(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      httpParams = httpParams.append(key, params[key]);
    });

    return this.http.get(this.authVerify);
  }

}

