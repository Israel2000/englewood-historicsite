import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container section-padding" style="margin-top: 80px;">
      <!-- About Header -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="display-4 mb-4">About Historic Englewood</h1>
          <p class="lead">Preserving our heritage, building our community</p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="row align-items-center mb-5">
        <div class="col-lg-6">
          <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" 
               alt="Historic Englewood Building" 
               class="img-fluid rounded shadow-lg">
        </div>
        <div class="col-lg-6">
          <h2 class="mb-4">Our Mission</h2>
          <p class="mb-4">
            Historic Englewood is dedicated to preserving the architectural heritage, cultural traditions, 
            and community spirit that make our neighborhood unique. We work to maintain the historic character 
            while fostering a vibrant, inclusive community for all residents.
          </p>
          <p class="mb-4">
            Through education, advocacy, and community engagement, we ensure that Englewood's rich history 
            continues to inspire and guide future generations.
          </p>
          <a routerLink="/history" class="btn btn-primary-custom">Explore Our History</a>
        </div>
      </div>

      <!-- Values Section -->
      <div class="row text-center mb-5">
        <div class="col-12">
          <h2 class="mb-5">Our Values</h2>
        </div>
        
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="custom-card h-100 p-4">
            <div class="mb-3" style="color: var(--secondary-gold); font-size: 3rem;">
              <i class="fas fa-landmark"></i>
            </div>
            <h4>Preservation</h4>
            <p>Protecting and maintaining our historic buildings, landmarks, and cultural heritage for future generations.</p>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="custom-card h-100 p-4">
            <div class="mb-3" style="color: var(--accent-green); font-size: 3rem;">
              <i class="fas fa-users"></i>
            </div>
            <h4>Community</h4>
            <p>Building strong connections among residents and fostering a sense of belonging and shared purpose.</p>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="custom-card h-100 p-4">
            <div class="mb-3" style="color: var(--primary-navy); font-size: 3rem;">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h4>Education</h4>
            <p>Sharing knowledge about our history and promoting understanding of historic preservation principles.</p>
          </div>
        </div>
      </div>

      <!-- Leadership Section -->
      <div class="row">
        <div class="col-12">
          <h2 class="text-center mb-5">Community Leadership</h2>
        </div>
        
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="text-center">
            <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                 alt="Board Member" 
                 class="rounded-circle mb-3" 
                 style="width: 150px; height: 150px; object-fit: cover;">
            <h5>Sarah Johnson</h5>
            <p class="text-muted mb-2">Board President</p>
            <p>Historic preservation advocate with 15 years of community service experience.</p>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="text-center">
            <img src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg" 
                 alt="Board Member" 
                 class="rounded-circle mb-3" 
                 style="width: 150px; height: 150px; object-fit: cover;">
            <h5>Michael Chen</h5>
            <p class="text-muted mb-2">Vice President</p>
            <p>Architect specializing in historic building restoration and adaptive reuse projects.</p>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="text-center">
            <img src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg" 
                 alt="Board Member" 
                 class="rounded-circle mb-3" 
                 style="width: 150px; height: 150px; object-fit: cover;">
            <h5>Emily Rodriguez</h5>
            <p class="text-muted mb-2">Secretary</p>
            <p>Local historian and educator passionate about sharing Englewood's unique stories.</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="row mt-5">
        <div class="col-12 text-center">
          <div class="custom-card p-5" style="background: linear-gradient(135deg, var(--primary-navy), var(--accent-green)); color: white;">
            <h3 class="mb-4">Get Involved</h3>
            <p class="mb-4">
              Whether you're a longtime resident or new to the area, there are many ways to contribute to our historic community.
            </p>
            <a routerLink="/contact" class="btn btn-secondary-custom">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}