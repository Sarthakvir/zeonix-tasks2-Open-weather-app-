import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Import routes
import { provideHttpClient } from '@angular/common/http'; // Import HttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide router configuration
    provideHttpClient(), // Provide HttpClient
  ],
}).catch((err) => console.error(err));