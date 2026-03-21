import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemService } from '../../core/services/menu_items.service';
import { MenuItem } from '../../model/menu-item.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-menu-item-screen',
  imports: [
  ],
  templateUrl: './menu-item-screen.html',
  styleUrl: './menu-item-screen.scss',
})
export class MenuItemScreen {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private menuItemService = inject(MenuItemService);

  item = signal<MenuItem | null>(null);

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe(params => {
      const slug = params.get('id');
      const id = slug?.split('_')[1];

      if (id) {
        this.loadItem(id);
      }
    });
  }

  loadItem(id: string) {
    this.menuItemService.getItemById(id).subscribe({
      next: (data) => this.item.set(data),
      error: () => {

        this.router.navigate(['/404'], { skipLocationChange: true });

      }
    });
  }
}
