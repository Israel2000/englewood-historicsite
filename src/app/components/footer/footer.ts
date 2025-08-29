import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <h5>Historic Englewood</h5>
            <p class="mb-3">Preserving our past, building our future. Join us in celebrating and maintaining the rich heritage of Englewood.</p>
            <div class="d-flex gap-3">
              <a href="#" class="text-decoration-none">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="text-decoration-none">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-decoration-none">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div class="col-lg-2 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/history">Our History</a></li>
              <li><a routerLink="/events">Events</a></li>
              <li><a routerLink="/gallery">Gallery</a></li>
            </ul>
          </div>
          
          <div class="col-lg-3 col-md-6 mb-4">
            <h5>Community</h5>
            <ul class="list-unstyled">
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Membership</a></li>
              <li><a href="#">Donations</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
          
          <div class="col-lg-3 col-md-6 mb-4">
            <h5>Contact Info</h5>
            <div class="d-flex align-items-center mb-2">
              <i class="fas fa-map-marker-alt me-2"></i>
              <span>123 Historic Ave, Englewood, CO</span>
            </div>
            <div class="d-flex align-items-center mb-2">
              <i class="fas fa-phone me-2"></i>
              <span>(303) 555-0123</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="fas fa-envelope me-2"></i>
              <span>info&#64;historicenglewood.com</span>
            </div>
          </div>
        </div>
        
        <hr class="my-4" style="border-color: rgba(255, 255, 255, 0.2);">
        
        <div class="row">
          <div class="col-md-6">
            <p class="mb-0">&copy; 2025 Historic Englewood. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <a href="#" class="me-3">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}