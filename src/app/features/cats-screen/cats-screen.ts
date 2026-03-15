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

  currentIndex = signal(0);

  getPosition(index: number): string {
    const current = this.currentIndex();
    const count = this.cats().length;

    if (index === current) return 'middle';

    if (index === (current - 1 + count) % count) return 'left';
    if (index === (current + 1) % count) return 'right';

    return 'hidden';
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
  private touchStartY = 0;
  private touchEndY = 0;

  handleTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;
  }

  handleTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.touchEndY = event.changedTouches[0].screenY;

    this.handleSwipe();
  }

  handleSwipe() {
    const threshold = 50;

    const diffX = this.touchStartX - this.touchEndX;
    const diffY = this.touchStartY - this.touchEndY;

    const isSmallViewport = window.innerWidth < 600;

    if (isSmallViewport) {
      if (Math.abs(diffY) > threshold) {
        if (diffY > 0) {
          this.move('next'); // swipe up
        } else {
          this.move('prev'); // swipe down
        }
      }
    } else {
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          this.move('next'); // swipe left
        } else {
          this.move('prev'); // swipe right
        }
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
