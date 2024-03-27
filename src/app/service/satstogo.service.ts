import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SatstogoService {
    private apiUrl = 'https://backend-satstogo-production.up.railway.app/api/withdraw';

    constructor(private http: HttpClient) {}
  
    generateLnurl(params: any): Observable<any> {
      // Use HttpParams for GET request query parameters
      let httpParams = new HttpParams();
      Object.keys(params).forEach(key => {
        httpParams = httpParams.append(key, params[key]);
      });
  
      return this.http.get(this.apiUrl, { params: httpParams });
    }
}
