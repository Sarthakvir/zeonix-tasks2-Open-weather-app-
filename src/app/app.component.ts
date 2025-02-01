import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, WeatherDashboardComponent], // Import standalone components
  template: `
    <div class="main">
      <div class="content">
        <div class="left-side">
          <h1>Weather Dashboard</h1>
          <p>Get real-time weather updates for any city.</p>
        </div>
        <div class="divider" role="separator" aria-label="Divider"></div>
        <div class="right-side">
          <app-weather-dashboard></app-weather-dashboard>
        </div>
      </div>
    </div>
    <router-outlet />
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weather Dashboard';
}