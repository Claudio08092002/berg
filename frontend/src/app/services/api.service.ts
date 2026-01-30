import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HealthResponse {
  status: string;
  message: string;
  timestamp: number;
}

export interface InfoResponse {
  name: string;
  version: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  /**
   * Check backend health status
   */
  getHealth(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(`${this.baseUrl}/health`);
  }

  /**
   * Get backend application info
   */
  getInfo(): Observable<InfoResponse> {
    return this.http.get<InfoResponse>(`${this.baseUrl}/info`);
  }
}
