import { Component, signal } from '@angular/core';
import { MenuItemComponent } from '../../shared/menu-item-component/menu-item-component';
import { MenuItem } from '../../model/menu-item.model';
import { MenuItemService } from '../../core/services/menu_items.service';

@Component({
  selector: 'app-menu-screen',
  imports: [MenuItemComponent],
  templateUrl: './menu-screen.html',
  styleUrl: './menu-screen.scss',
})
export class MenuScreen {

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

