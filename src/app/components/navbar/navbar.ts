import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
      <div class="container">
        <a class="navbar-brand" routerLink="/">
          <i class="fas fa-landmark me-2"></i>
          Historic Englewood
        </a>
        
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          [attr.aria-expanded]="isMenuOpen"
          (click)="toggleMenu()">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav" [class.show]="isMenuOpen">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about" routerLinkActive="active">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/history" routerLinkActive="active">History</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/events" routerLinkActive="active">Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/gallery" routerLinkActive="active">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar-toggler {
      border: none;
      color: white;
    }
    
    .navbar-toggler:focus {
      box-shadow: none;
    }
    
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.85%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    
    .nav-link.active {
      color: var(--secondary-gold) !important;
    }
    
    @media (max-width: 991.98px) {
      .navbar-collapse {
        background-color: var(--primary-navy);
        margin-top: 16px;
        border-radius: 8px;
        padding: 26px;
      }
    }
    
    .container {
      margin-bottom: 50px;
    }
  `]
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}