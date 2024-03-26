import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SatstogoService {
  private apiUrl = 'https://backend-satstogo-production.up.railway.app/api/withdraw';

  constructor(private http: HttpClient) {}

  generateLnurl(params: any): Observable<any> {
    // You might need to include proper typing for the params and the response
    return this.http.post(this.apiUrl, params);
  }
}
