import { Component, inject, signal, computed, effect, OnInit } from '@angular/core';
import { MenuItemComponent } from '../../shared/menu-item-component/menu-item-component';
import { MenuItem } from '../../model/menu-item.model';
import { MenuItemService } from '../../core/services/menu_items.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-menu-screen',
  standalone: true,
  imports: [MenuItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './menu-screen.html',
  styleUrl: './menu-screen.scss',
})
export class MenuScreen implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private menuItemService = inject(MenuItemService);

  private readonly VALID_TYPES = ['coffee', 'beverages', 'desserts'];

  menuItemType = toSignal(
    this.route.params.pipe(map(p => p['type'])),
    { initialValue: '' }
  );

  allMenuItems = signal<MenuItem[]>([]);

  filteredMenuItems = computed(() => {
    const type = this.menuItemType();

    if (!this.VALID_TYPES.includes(type)) {
      return [];
    }

    return this.allMenuItems().filter(item => item.type === type);
  });

  constructor() {
    effect(() => {
      const type = this.menuItemType();

      if (type && !this.VALID_TYPES.includes(type)) {
        this.router.navigate(['/404']);
      }
    });
  }

  ngOnInit() {
    this.menuItemService.getAll().subscribe({
      next: (items) => this.allMenuItems.set(items),
      error: (err) => console.error('Failed to fetch menu items', err)
    });
  }
}
