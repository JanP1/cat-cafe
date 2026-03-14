import { Component, signal } from '@angular/core';
import { Cat } from '../../model/cat.model';
import { CatService } from '../../core/services/cat.service';
import { CatPanel } from '../../shared/cat-panel/cat-panel';

@Component({
  selector: 'app-cats-screen',
  imports: [CatPanel],
  templateUrl: './cats-screen.html',
  styleUrl: './cats-screen.scss',
})
export class CatsScreen {

  cats = signal<Cat[]>([]);

  currentIndex = signal(0); // Tracks which ID is in the middle

  // Helper to determine position based on index
  getPosition(index: number): string {
    const current = this.currentIndex();
    const count = this.cats().length;

    if (index === current) return 'middle';

    // Logic for circular navigation (left/right)
    if (index === (current - 1 + count) % count) return 'left';
    if (index === (current + 1) % count) return 'right';

    return 'hidden'; // For the other 7 cats
  }

  move(direction: 'prev' | 'next') {
    const count = this.cats().length;
    if (direction === 'next') {
      this.currentIndex.update(i => (i + 1) % count);
    } else {
      this.currentIndex.update(i => (i - 1 + count) % count);
    }
  }

  handleInteraction(index: number) {
    const pos = this.getPosition(index);
    if (pos === 'left') this.move('prev');
    if (pos === 'right') this.move('next');
  }

  private touchStartX = 0;
  private touchEndX = 0;

  handleTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  handleTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const threshold = 50; // minimum distance to be considered a swipe
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        this.move('next'); // Swiped left
      } else {
        this.move('prev'); // Swiped right
      }
    }
  }

  constructor(private catService: CatService) {}

  ngOnInit() {

    this.catService.getAll().subscribe({
      next: (items) => this.cats.set(items),
      error: (err) => console.error('Failed to fetch menu items', err)
    });
  }


}
