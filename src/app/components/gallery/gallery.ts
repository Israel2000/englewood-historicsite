import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container section-padding" style="margin-top: 80px;">
      <!-- Gallery Header -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="display-4 mb-4">Photo Gallery</h1>
          <p class="lead">Capturing the beauty and heritage of Historic Englewood</p>
        </div>
      </div>

      <!-- Gallery Grid -->
      <div class="row g-4">
        <div class="col-lg-4 col-md-6" *ngFor="let image of galleryImages; let i = index">
          <div class="gallery-item fade-in" [class.stagger-animation]="i > 0">
            <img [src]="image" 
                 [alt]="'Historic Englewood Image ' + (i + 1)" 
                 class="img-fluid"
                 (click)="openModal(image, i)">
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="row mt-5">
        <div class="col-12 text-center">
          <button class="btn btn-primary-custom btn-lg">Load More Photos</button>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="galleryModal" tabindex="-1" *ngIf="selectedImage">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Historic Englewood Gallery</h5>
              <button type="button" class="btn-close" (click)="closeModal()"></button>
            </div>
            <div class="modal-body p-0">
              <img [src]="selectedImage" 
                   class="img-fluid w-100" 
                   [alt]="'Gallery Image ' + (selectedIndex + 1)">
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" 
                      class="btn btn-outline-secondary"
                      (click)="previousImage()"
                      [disabled]="selectedIndex === 0">
                <i class="fas fa-arrow-left me-2"></i>Previous
              </button>
              <span class="text-muted">{{ selectedIndex + 1 }} of {{ galleryImages.length }}</span>
              <button type="button" 
                      class="btn btn-outline-secondary"
                      (click)="nextImage()"
                      [disabled]="selectedIndex === galleryImages.length - 1">
                Next<i class="fas fa-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery Categories -->
      <div class="row mt-5">
        <div class="col-12">
          <h3 class="text-center mb-4">Explore by Category</h3>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="custom-card text-center p-4">
            <div class="mb-3" style="color: var(--secondary-gold); font-size: 3rem;">
              <i class="fas fa-home"></i>
            </div>
            <h5>Historic Homes</h5>
            <p class="text-muted">Beautiful Victorian and Craftsman style houses</p>
          </div>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="custom-card text-center p-4">
            <div class="mb-3" style="color: var(--accent-green); font-size: 3rem;">
              <i class="fas fa-tree"></i>
            </div>
            <h5>Parks & Gardens</h5>
            <p class="text-muted">Green spaces and community gardens</p>
          </div>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="custom-card text-center p-4">
            <div class="mb-3" style="color: var(--primary-navy); font-size: 3rem;">
              <i class="fas fa-users"></i>
            </div>
            <h5>Community Events</h5>
            <p class="text-muted">Festivals, gatherings, and celebrations</p>
          </div>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="custom-card text-center p-4">
            <div class="mb-3" style="color: var(--warning); font-size: 3rem;">
              <i class="fas fa-camera"></i>
            </div>
            <h5>Then & Now</h5>
            <p class="text-muted">Historical comparisons and evolution</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class GalleryComponent implements OnInit {
  galleryImages: string[] = [];
  selectedImage: string | null = null;
  selectedIndex: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.galleryImages = this.dataService.getGalleryImages();
  }

  openModal(image: string, index: number) {
    this.selectedImage = image;
    this.selectedIndex = index;
  }

  closeModal() {
    this.selectedImage = null;
  }

  previousImage() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.selectedImage = this.galleryImages[this.selectedIndex];
    }
  }

  nextImage() {
    if (this.selectedIndex < this.galleryImages.length - 1) {
      this.selectedIndex++;
      this.selectedImage = this.galleryImages[this.selectedIndex];
    }
  }
}