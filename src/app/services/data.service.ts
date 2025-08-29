import { Injectable } from '@angular/core';
import { Event } from '../model/event.model';
import { HistoryItem } from '../model/history-item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  getUpcomingEvents(): Event[] {
    return [
      {
        id: 1,
        title: 'Historic Home Tour',
        date: '2025-02-15',
        time: '10:00 AM - 4:00 PM',
        location: 'Downtown Englewood',
        description: 'Join us for a guided tour of Englewood\'s most beautiful historic homes and learn about their architectural significance.',
        imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
        category: 'historical'
      },
      {
        id: 2,
        title: 'Community Garden Workshop',
        date: '2025-02-22',
        time: '9:00 AM - 12:00 PM',
        location: 'Englewood Community Center',
        description: 'Learn sustainable gardening practices and help maintain our historic community garden.',
        imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
        category: 'community'
      },
      {
        id: 3,
        title: 'Heritage Festival',
        date: '2025-03-05',
        time: '11:00 AM - 6:00 PM',
        location: 'Historic District Park',
        description: 'Celebrate Englewood\'s rich cultural heritage with food, music, and traditional crafts.',
        imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
        category: 'cultural'
      }
    ];
  }

  getHistoryTimeline(): HistoryItem[] {
    return [
      {
        year: '1858',
        title: 'Town Founded',
        description: 'Englewood was established as a small farming community along the railroad line.',
        imageUrl: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg'
      },
      {
        year: '1885',
        title: 'Railroad Expansion',
        description: 'The completion of the main railroad line brought prosperity and growth to the area.',
        imageUrl: 'https://images.pexels.com/photos/163676/old-train-steam-locomotive-vintage-163676.jpeg'
      },
      {
        year: '1920',
        title: 'Historic District',
        description: 'The downtown area was designated as a historic district, preserving its architectural heritage.',
        imageUrl: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg'
      },
      {
        year: '1995',
        title: 'Restoration Project',
        description: 'Major community-led restoration project revitalized the historic downtown area.',
        imageUrl: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg'
      }
    ];
  }

  getGalleryImages(): string[] {
    return [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg',
      'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg',
      'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg'
    ];
  }
}