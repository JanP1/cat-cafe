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

  constructor(private catService: CatService) {}

  ngOnInit() {
    // fetch menu items from the service
    this.catService.getAll().subscribe({
      next: (items) => this.cats.set(items),
      error: (err) => console.error('Failed to fetch menu items', err)
    });
  }

}
