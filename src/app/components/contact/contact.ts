import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container section-padding" style="margin-top: 80px;">
      <!-- Contact Header -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="display-4 mb-4">Contact Us</h1>
          <p class="lead">Get in touch with the Historic Englewood community</p>
        </div>
      </div>

      <div class="row">
        <!-- Contact Information -->
        <div class="col-lg-4 mb-5">
          <div class="custom-card p-4 h-100">
            <h3 class="mb-4">Get In Touch</h3>
            
            <div class="d-flex align-items-start mb-4">
              <div class="me-3" style="color: var(--secondary-gold); font-size: 1.5rem;">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h6 class="mb-1">Address</h6>
                <p class="text-muted mb-0">123 Historic Avenue<br>Englewood, CO 80110</p>
              </div>
            </div>
            
            <div class="d-flex align-items-start mb-4">
              <div class="me-3" style="color: var(--secondary-gold); font-size: 1.5rem;">
                <i class="fas fa-phone"></i>
              </div>
              <div>
                <h6 class="mb-1">Phone</h6>
                <p class="text-muted mb-0">(303) 555-0123</p>
              </div>
            </div>
            
            <div class="d-flex align-items-start mb-4">
              <div class="me-3" style="color: var(--secondary-gold); font-size: 1.5rem;">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <h6 class="mb-1">Email</h6>
                <p class="text-muted mb-0">info&#64;historicenglewood.com</p>
              </div>
            </div>
            
            <div class="d-flex align-items-start">
              <div class="me-3" style="color: var(--secondary-gold); font-size: 1.5rem;">
                <i class="fas fa-clock"></i>
              </div>
              <div>
                <h6 class="mb-1">Office Hours</h6>
                <p class="text-muted mb-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p class="text-muted mb-0">Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-lg-8 mb-5">
          <div class="custom-card p-4">
            <h3 class="mb-4">Send Us a Message</h3>
            
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="firstName" class="form-label">First Name *</label>
                  <input type="text" 
                         class="form-control" 
                         id="firstName" 
                         [(ngModel)]="formData.firstName"
                         name="firstName"
                         required>
                </div>
                <div class="col-md-6">
                  <label for="lastName" class="form-label">Last Name *</label>
                  <input type="text" 
                         class="form-control" 
                         id="lastName" 
                         [(ngModel)]="formData.lastName"
                         name="lastName"
                         required>
                </div>
              </div>
              
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="email" class="form-label">Email Address *</label>
                  <input type="email" 
                         class="form-control" 
                         id="email" 
                         [(ngModel)]="formData.email"
                         name="email"
                         required>
                </div>
                <div class="col-md-6">
                  <label for="phone" class="form-label">Phone Number</label>
                  <input type="tel" 
                         class="form-control" 
                         id="phone" 
                         [(ngModel)]="formData.phone"
                         name="phone">
                </div>
              </div>
              
              <div class="mb-3">
                <label for="subject" class="form-label">Subject *</label>
                <select class="form-control" 
                        id="subject" 
                        [(ngModel)]="formData.subject"
                        name="subject"
                        required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="membership">Membership</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="events">Events Information</option>
                  <option value="preservation">Historic Preservation</option>
                </select>
              </div>
              
              <div class="mb-4">
                <label for="message" class="form-label">Message *</label>
                <textarea class="form-control" 
                          id="message" 
                          rows="5" 
                          [(ngModel)]="formData.message"
                          name="message"
                          required></textarea>
              </div>
              
              <button type="submit" 
                      class="btn btn-primary-custom btn-lg"
                      [disabled]="!contactForm.form.valid">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <div class="row">
        <div class="col-12">
          <div class="custom-card">
            <div class="card-body p-0">
              <div style="height: 400px; background: linear-gradient(135deg, var(--neutral-light), var(--secondary-gold)); display: flex; align-items: center; justify-content: center; border-radius: 12px;">
                <div class="text-center">
                  <i class="fas fa-map-marked-alt" style="font-size: 4rem; color: var(--primary-navy); margin-bottom: 20px;"></i>
                  <h4>Interactive Map</h4>
                  <p class="text-muted">Map integration coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    if (this.isFormValid()) {
      // Handle form submission
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message! We\'ll get back to you soon.');
      this.resetForm();
    }
  }

  private isFormValid(): boolean {
    return !!(this.formData.firstName && 
             this.formData.lastName && 
             this.formData.email && 
             this.formData.subject && 
             this.formData.message);
  }

  private resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}