import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app/app.routes';
import { NavbarComponent } from "./app/components/navbar/navbar";
import { FooterComponent } from "./app/components/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});