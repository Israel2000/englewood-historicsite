import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Event } from '../../model/event.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content container">
        <div class="row">
          <div class="col-lg-12">
            <div class=" full-width-green-bg">
              <div>
                <h5 class="text-white" style="margin: 0;">
                  <p class="">Every Saturday at the Civic Center, Come on visit us </p>
                </h5>
                <div class="d-flex flex-wrap gap-3 fade-in stagger-animation mt-4">
                  <a routerLink="/about" class="btn btn-primary-custom">Learn Our Story</a>
                  <a routerLink="/events" class="btn btn-secondary-custom">Upcoming Events</a>
                </div>
              </div>
            </div>
            <div class="full-width-green-bg flex-container">
              <div class="d-flex justify-content-between flex-wrap pt-4">
                <div class="p-4 bg-light rounded text-center flex-fill m-2 section-box">
                  <i class="bi bi-house-door"></i>
                  Section 1
                </div>
                <div class="p-4 bg-light rounded text-center flex-fill m-2 section-box">
                  <i class="bi bi-people"></i>
                  Section 2
                </div>
                <div class="p-4 bg-light rounded text-center flex-fill m-2 section-box">
                  <i class="bi bi-gear"></i>
                  Section 3
                </div>
                <div class="p-4 bg-light rounded text-center flex-fill m-2 section-box">
                  <i class="bi bi-bar-chart"></i>
                  Section 4
                </div>
                <div class="p-4 bg-light  rounded text-center flex-fill m-2 section-box">
                  <i class="bi bi-envelope"></i>
                  Section 5
                </div>
                <div class="p-4 bg-light rounded text-center flex-fill m-2 section-box">
                  <i class="bi bi-check-circle"></i>
                  Section 6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Highlights -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="display-5 mb-3">Experience Historic Englewood</h2>
            <p class="lead text-muted">Explore what makes our community special</p>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="custom-card h-100 fade-in">
              <div class="card-img-top position-relative">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                  alt="Historic Architecture"
                  class="img-fluid"
                  style="height: 250px; object-fit: cover; width: 100%;"
                />
                <div class="position-absolute top-0 start-0 p-3">
                  <span
                    class="badge"
                    style="background-color: var(--secondary-gold); color: var(--primary-navy);"
                  >
                    Architecture
                  </span>
                </div>
              </div>
              <div class="card-body p-4">
                <h4 class="card-title">Historic Architecture</h4>
                <p class="card-text">
                  Explore our beautifully preserved Victorian and early 20th-century homes that tell
                  the story of Englewood's development.
                </p>
                <a routerLink="/history" class="btn btn-outline-primary">Learn More</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="custom-card h-100 fade-in stagger-animation">
              <div class="card-img-top position-relative">
                <img
                  src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
                  alt="Community Events"
                  class="img-fluid"
                  style="height: 250px; object-fit: cover; width: 100%;"
                />
                <div class="position-absolute top-0 start-0 p-3">
                  <span class="badge" style="background-color: var(--accent-green); color: white;">
                    Community
                  </span>
                </div>
              </div>
              <div class="card-body p-4">
                <h4 class="card-title">Community Events</h4>
                <p class="card-text">
                  Join neighbors and friends at our regular events celebrating local culture,
                  history, and community spirit.
                </p>
                <a routerLink="/events" class="btn btn-outline-primary">View Events</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="custom-card h-100 fade-in stagger-animation">
              <div class="card-img-top position-relative">
                <img
                  src="https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg"
                  alt="Preservation Efforts"
                  class="img-fluid"
                  style="height: 250px; object-fit: cover; width: 100%;"
                />
                <div class="position-absolute top-0 start-0 p-3">
                  <span class="badge" style="background-color: var(--success); color: white;">
                    Preservation
                  </span>
                </div>
              </div>
              <div class="card-body p-4">
                <h4 class="card-title">Preservation Efforts</h4>
                <p class="card-text">
                  Discover how our community works together to preserve historic landmarks and
                  maintain our unique character.
                </p>
                <a routerLink="/about" class="btn btn-outline-primary">Get Involved</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="section-padding" style="background-color: #F8F9FA;">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="display-5 mb-3">Upcoming Events</h2>
            <p class="lead text-muted">Join us for these exciting community gatherings</p>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let event of upcomingEvents; let i = index">
            <div class="custom-card h-100 fade-in" [class.stagger-animation]="i > 0">
              <div class="card-img-top position-relative">
                <img
                  [src]="event.imageUrl"
                  [alt]="event.title"
                  class="img-fluid"
                  style="height: 200px; object-fit: cover; width: 100%;"
                />
                <div class="position-absolute top-0 end-0 p-3">
                  <span class="badge bg-white text-dark">
                    {{ formatDate(event.date) }}
                  </span>
                </div>
              </div>
              <div class="card-body p-4">
                <h5 class="card-title">{{ event.title }}</h5>
                <p class="card-text text-muted mb-2">
                  <i class="fas fa-clock me-2"></i>{{ event.time }}
                </p>
                <p class="card-text text-muted mb-3">
                  <i class="fas fa-map-marker-alt me-2"></i>{{ event.location }}
                </p>
                <p class="card-text">{{ event.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <a routerLink="/events" class="btn btn-primary-custom">View All Events</a>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h2 class="display-6 mb-3">Become Part of Our Story</h2>
            <p class="lead mb-4">
              Help preserve Englewood's historic character for future generations. Whether through
              volunteering, membership, or simply spreading awareness, every contribution matters.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a routerLink="/contact" class="btn btn-primary-custom btn-lg">Join Us Today</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .full-width-green-bg {
         color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        background-color: rgb(24, 112, 96) !important;
        margin-top: 220px !important;
      }
       .section-box {
        transition: all 0.3s ease;
        cursor: pointer;
      }
      .section-box:hover {
        background-color: #064420; /* dark green */
        color: #fff; /* text white */
        transform: translateY(-5px); /* lift effect */
        box-shadow: 0 6px 12px rgba(0,0,0,0.2);
      }
      .section-box i {
        font-size: 2rem;
        margin-bottom: 8px;
        display: block;
      }
      .flex-container {
        min-width: 100%;
        height: auto;
        background-color:rgb(24, 112, 96) !important;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border: 0;
      }
      .bg-light {
        background-color: rgb(24, 112, 96) !important;
        height: 200px;
        width: 150px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  upcomingEvents: Event[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.upcomingEvents = this.dataService.getUpcomingEvents().slice(0, 3);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  }
}
