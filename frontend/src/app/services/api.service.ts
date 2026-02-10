import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tour {
  id: number;
  title: string;
  description: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';
  price: number;
  maxParticipants: number;
  date: string;
  location: string;
  guide: User;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: 'CUSTOMER' | 'GUIDE' | 'ADMIN';
}

export interface Booking {
  id: number;
  tour: Tour;
  customer: User;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  bookedAt: string;
}

export interface HealthResponse {
  status: string;
  message: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Health
  getHealth(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(`${this.baseUrl}/health`);
  }

  // Tours
  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(`${this.baseUrl}/tours`);
  }

  getTourById(id: number): Observable<Tour> {
    return this.http.get<Tour>(`${this.baseUrl}/tours/${id}`);
  }

  getToursByGuide(guideId: number): Observable<Tour[]> {
    return this.http.get<Tour[]>(`${this.baseUrl}/tours/guide/${guideId}`);
  }

  createTour(tour: Partial<Tour>): Observable<Tour> {
    return this.http.post<Tour>(`${this.baseUrl}/tours`, tour);
  }

  // Users
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  // Bookings
  createBooking(booking: Partial<Booking>): Observable<Booking> {
    return this.http.post<Booking>(`${this.baseUrl}/bookings`, booking);
  }

  getBookingsByUser(userId: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/bookings/user/${userId}`);
  }
}
