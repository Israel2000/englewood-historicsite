import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Event } from '../../model/event.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container section-padding" style="margin-top: 80px;">
      <!-- Events Header -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="display-4 mb-4">Community Events</h1>
          <p class="lead">Join us for engaging activities that celebrate our historic community</p>
        </div>
      </div>

      <!-- Filter Buttons -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <div class="btn-group" role="group">
            <button type="button" 
                    class="btn"
                    [class.btn-primary-custom]="selectedCategory === 'all'"
                    [class.btn-outline-primary]="selectedCategory !== 'all'"
                    (click)="filterEvents('all')">
              All Events
            </button>
            <button type="button" 
                    class="btn"
                    [class.btn-primary-custom]="selectedCategory === 'historical'"
                    [class.btn-outline-primary]="selectedCategory !== 'historical'"
                    (click)="filterEvents('historical')">
              Historical
            </button>
            <button type="button" 
                    class="btn"
                    [class.btn-primary-custom]="selectedCategory === 'community'"
                    [class.btn-outline-primary]="selectedCategory !== 'community'"
                    (click)="filterEvents('community')">
              Community
            </button>
            <button type="button" 
                    class="btn"
                    [class.btn-primary-custom]="selectedCategory === 'cultural'"
                    [class.btn-outline-primary]="selectedCategory !== 'cultural'"
                    (click)="filterEvents('cultural')">
              Cultural
            </button>
          </div>
        </div>
      </div>

      <!-- Events Grid -->
      <div class="row g-4">
        <div class="col-lg-6" *ngFor="let event of filteredEvents; let i = index">
          <div class="custom-card h-100 fade-in" [class.stagger-animation]="i > 0">
            <div class="row g-0 h-100">
              <div class="col-md-5">
                <img [src]="event.imageUrl" 
                     [alt]="event.title" 
                     class="img-fluid h-100" 
                     style="object-fit: cover; border-radius: 12px 0 0 12px;">
              </div>
              <div class="col-md-7">
                <div class="card-body p-4 h-100 d-flex flex-column">
                  <div class="mb-2">
                    <span class="badge mb-2" 
                          [style.background-color]="getCategoryColor(event.category)"
                          [style.color]="getCategoryTextColor(event.category)">
                      {{ getCategoryLabel(event.category) }}
                    </span>
                  </div>
                  <h5 class="card-title">{{ event.title }}</h5>
                  <div class="text-muted mb-2">
                    <i class="fas fa-calendar me-2"></i>
                    {{ formatDate(event.date) }}
                  </div>
                  <div class="text-muted mb-2">
                    <i class="fas fa-clock me-2"></i>
                    {{ event.time }}
                  </div>
                  <div class="text-muted mb-3">
                    <i class="fas fa-map-marker-alt me-2"></i>
                    {{ event.location }}
                  </div>
                  <p class="card-text flex-grow-1">{{ event.description }}</p>
                  <button class="btn btn-outline-primary mt-auto">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Events Message -->
      <div class="row" *ngIf="filteredEvents.length === 0">
        <div class="col-12 text-center">
          <div class="custom-card p-5">
            <h4>No events found</h4>
            <p class="text-muted">No events match the selected category. Please try a different filter.</p>
          </div>
        </div>
      </div>

      <!-- Newsletter Signup -->
      <div class="row mt-5">
        <div class="col-lg-8 mx-auto">
          <div class="custom-card p-5 text-center" style="background: var(--neutral-light);">
            <h3 class="mb-3">Stay Updated</h3>
            <p class="mb-4">Subscribe to our newsletter to receive updates about upcoming events and community news.</p>
            <div class="row">
              <div class="col-md-8 mb-3 mb-md-0">
                <input type="email" 
                       class="form-control form-control-lg" 
                       placeholder="Enter your email address">
              </div>
              <div class="col-md-4">
                <button class="btn btn-primary-custom btn-lg w-100">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  selectedCategory: string = 'all';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.events = this.dataService.getUpcomingEvents();
    this.filteredEvents = this.events;
  }

  filterEvents(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredEvents = this.events;
    } else {
      this.filteredEvents = this.events.filter(event => event.category === category);
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long', 
      day: 'numeric' 
    });
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'community': 'var(--accent-green)',
      'historical': 'var(--secondary-gold)',
      'cultural': 'var(--primary-navy)',
      'educational': 'var(--success)'
    };
    return colors[category] || 'var(--primary-navy)';
  }

  getCategoryTextColor(category: string): string {
    const textColors: { [key: string]: string } = {
      'community': 'white',
      'historical': 'var(--primary-navy)',
      'cultural': 'white',
      'educational': 'white'
    };
    return textColors[category] || 'white';
  }

  getCategoryLabel(category: string): string {
    const labels: { [key: string]: string } = {
      'community': 'Community',
      'historical': 'Historical',
      'cultural': 'Cultural',
      'educational': 'Educational'
    };
    return labels[category] || category;
  }
}