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
                <h5 class="text-white">
                  <p class="">Every Saturday at the Civic Center, Come and visit us @10am - 2 pm </p>
                </h5>
                <div class="d-flex flex-wrap gap-3 fade-in stagger-animation mt-4">
                  <a routerLink="/about" class="btn btn-primary-custom">Learn Our Story</a>
                  <a routerLink="/events" class="btn btn-secondary-custom">Upcoming Events</a>
                </div>
              </div>
            </div>

             <!-- Gallery Categories -->
          <div class="row mt-2 ">
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="custom-card text-center p-4">

                <h5 class="mb-5">Historic Homes</h5>
                <!-- <p class="text-muted">Beautiful Victorian and Craftsman style houses</p> -->
                <div class="mb-3" style="color: var(--secondary-gold); font-size: 3rem;">
                  <i class="fas fa-home"></i>
                </div>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="custom-card text-center p-4">

                <h5 class="mb-5">Parks & Gardens</h5>
                <!-- <p class="text-muted">Green spaces and community gardens</p>  -->
                <div class="mb-3" style="color: var(--accent-green); font-size: 3rem;">
                  <i class="fas fa-tree"></i>
                </div>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="custom-card text-center p-4">
                
                <h5 class="mb-5">Community Events</h5>
                <!-- <p class="text-muted">Festivals, gatherings, and celebrations</p> -->
                <div class="mb-3" style="color: var(--primary-navy); font-size: 3rem;">
                  <i class="fas fa-users"></i>
                </div>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="custom-card text-center p-4">

                <h5 class="mb-5">Then & Now</h5>
                <!-- <p class="text-muted">Historical comparisons and evolution</p> -->
                <div class="mb-3" style="color: var(--warning); font-size: 3rem;">
                  <i class="fas fa-camera"></i>
                </div>
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
        <div class="row mb-5">
          <div class="col-12 text-start">
            <h2 class="display-5 mb-3">Experience Historic Englewood</h2>
            <!-- <p class="lead text-muted">Explore what makes our community special</p> -->
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
    <section class="section-padding" style=" background-color: rgb(24 112 96) !important">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="display-5 text-start mb-3 text-white">Upcoming Events</h2>
            <!-- <p class="lead text-muted">Join us for these exciting community gatherings</p> -->
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
                <p class="card-text text-white mb-2">
                  <i class="fas fa-clock me-2"></i>{{ event.time }}
                </p>
                <p class="card-text text-white mb-3">
                  <i class="fas fa-map-marker-alt me-2"></i>{{ event.location }}
                </p>
                <p class="card-text text-white">{{ event.description }}</p>
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
            <h3 class="display-6 mb-3">Become Part of Our Story</h3>
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
        // justify-content: center;
        // height: 150px;
        // width: 100vw;
        // position: relative;
        // left: 50%;
        // right: 50%;
        // margin-left: -50vw;
        // margin-right: -50vw;
        background-color: rgb(24, 112, 96) !important;
        margin-top: 260px !important;
        padding: 30px;
        margin-bottom: -8px;
      }

      .custom-card:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
        color: #073129ff !important;
      }

      .mt-2 {
        background-color: rgb(24, 112, 96) !important;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 320px;
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      }
      h5 {
        color: #fff;
      }
      .btn-outline-primary {
        border: 1px solid #187060;
        background-color: transparent;
        color: #187060;
      }
      .btn-outline-primary:hover {
        background-color: #187060;
        color: #fff;
      }
      h2 {
        margin-left: 20px;
        color: #187060;
        position: relative;
      }
      h2::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 100%;
        width: 20%;
        height: 8px;
        background: #187060;
        border-radius: 6px;
        margin-top: 18px;
      }

      .card-title {
        color: #187060;
      }

      .bg-white {
          background-color: #b9d5c8 !important;

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
