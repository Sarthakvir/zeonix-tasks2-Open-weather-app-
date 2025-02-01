import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-weather-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Add CommonModule and FormsModule here
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css'],
})
export class WeatherDashboardComponent {
  private searchSubject = new Subject<string>();
  weatherData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((city) => this.getWeather(city))
      )
      .subscribe((data) => {
        this.weatherData = data;
      });
  }

  search(city: string): void {
    this.searchSubject.next(city);
  }

  getWeather(city: string) {
    const apiKey = 'ae3749275f0ad95d344f6aa7882866bd';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    return this.http.get(url);
  }
}