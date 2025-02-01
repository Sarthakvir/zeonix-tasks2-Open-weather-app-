import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'ae3749275f0ad95d344f6aa7882866bd';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`).pipe(
      catchError(error => {
        console.error('Error fetching weather data', error);
        throw error;
      })
    );
  }

  searchWeather(city$: Observable<string>): Observable<any> {
    return city$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(city => this.getWeather(city))
    );
  }
}