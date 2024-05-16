import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private baseUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/launches`);
  }

  getCapsules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/capsules`);
  }

  getCapsuleDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/capsules/${id}`);
  }
  getLauncheDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/launches/${id}`);
  }
}
