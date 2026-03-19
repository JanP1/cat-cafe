import { Component, inject, signal } from '@angular/core';
import { MenuItemComponent } from '../../shared/menu-item-component/menu-item-component';
import { MenuItem } from '../../model/menu-item.model';
import { MenuItemService } from '../../core/services/menu_items.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-menu-screen',
  imports: [MenuItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './menu-screen.html',
  styleUrl: './menu-screen.scss',
})
export class MenuScreen {

  private route = inject(ActivatedRoute);

  menuItemType = toSignal(
    this.route.params.pipe(map(p => p['type'])),
    { initialValue: 'coffee' }
  );

  menuItems = signal<MenuItem[]>([]);

  constructor(private menuItemService: MenuItemService) {}

  ngOnInit() {
    // fetch menu items from the service
    this.menuItemService.getAll().subscribe({
      next: (items) => this.menuItems.set(items),
      error: (err) => console.error('Failed to fetch menu items', err)
    });
  }

}

