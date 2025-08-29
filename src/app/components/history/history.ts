import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { HistoryItem } from '../../model/history-item.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container section-padding" style="margin-top: 80px;">
      <!-- History Header -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="display-4 mb-4">Our Rich History</h1>
          <p class="lead">From humble beginnings to a thriving historic community</p>
        </div>
      </div>

      <!-- Timeline Section -->
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="timeline-container">
            <div class="timeline-item fade-in" *ngFor="let item of historyItems; let i = index" [class.stagger-animation]="i > 0">
              <div class="row align-items-center">
                <div class="col-md-4 mb-3 mb-md-0" *ngIf="item.imageUrl">
                  <img [src]="item.imageUrl" 
                       [alt]="item.title" 
                       class="img-fluid rounded shadow">
                </div>
                <div [ngClass]="item.imageUrl ? 'col-md-8' : 'col-12'">
                  <div class="d-flex align-items-center mb-2">
                    <span class="badge fs-6 me-3" 
                          style="background-color: var(--secondary-gold); color: var(--primary-navy); padding: 8px 16px;">
                      {{ item.year }}
                    </span>
                    <h4 class="mb-0">{{ item.title }}</h4>
                  </div>
                  <p class="text-muted">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Historic Landmarks -->
      <div class="row mt-5">
        <div class="col-12">
          <h2 class="text-center mb-5">Historic Landmarks</h2>
        </div>
        
        <div class="col-lg-6 mb-4">
          <div class="custom-card">
            <img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg" 
                 alt="Historic Building" 
                 class="card-img-top" 
                 style="height: 300px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">The Englewood Opera House</h5>
              <p class="card-text">
                Built in 1892, this beautifully restored venue continues to host performances and community events, 
                serving as the cultural heart of our historic district.
              </p>
              <span class="badge" style="background-color: var(--accent-green); color: white;">
                Est. 1892
              </span>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6 mb-4">
          <div class="custom-card">
            <img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg" 
                 alt="Historic Train Station" 
                 class="card-img-top" 
                 style="height: 300px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">Heritage Railroad Station</h5>
              <p class="card-text">
                The original 1885 station has been transformed into a museum showcasing Englewood's railroad heritage 
                and its impact on the community's development.
              </p>
              <span class="badge" style="background-color: var(--secondary-gold); color: var(--primary-navy);">
                Est. 1885
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Historical Facts -->
      <div class="row mt-5">
        <div class="col-12">
          <div class="custom-card p-5 text-center" style="background: linear-gradient(135deg, #F8F9FA, #E9ECEF);">
            <h3 class="mb-4">Did You Know?</h3>
            <div class="row">
              <div class="col-md-4 mb-3">
                <div class="h2 text-primary mb-2">150+</div>
                <p class="mb-0">Historic buildings preserved</p>
              </div>
              <div class="col-md-4 mb-3">
                <div class="h2 text-primary mb-2">167</div>
                <p class="mb-0">Years of rich history</p>
              </div>
              <div class="col-md-4 mb-3">
                <div class="h2 text-primary mb-2">12</div>
                <p class="mb-0">Blocks in historic district</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HistoryComponent implements OnInit {
  historyItems: HistoryItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.historyItems = this.dataService.getHistoryTimeline();
  }
}