import { Component, inject, signal, computed } from '@angular/core'; // Added computed
import { MenuItemComponent } from '../../shared/menu-item-component/menu-item-component';
import { MenuItem } from '../../model/menu-item.model';
import { MenuItemService } from '../../core/services/menu_items.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-menu-screen',
  standalone: true, // Assuming you are using standalone
  imports: [MenuItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './menu-screen.html',
  styleUrl: './menu-screen.scss',
})
export class MenuScreen {
  private route = inject(ActivatedRoute);
  private menuItemService = inject(MenuItemService); // Using inject for consistency

  // 1. Get the type from the URL as a signal
  menuItemType = toSignal(
    this.route.params.pipe(map(p => p['type'])),
    { initialValue: 'coffee' }
  );

  // 2. The raw list of all items
  allMenuItems = signal<MenuItem[]>([]);

  // 3. The filtered list (computed automatically reacts to changes in 1 or 2)
  filteredMenuItems = computed(() => {
    const type = this.menuItemType();
    return this.allMenuItems().filter(item => item.type === type);
  });

  ngOnInit() {
    this.menuItemService.getAll().subscribe({
      next: (items) => this.allMenuItems.set(items),
      error: (err) => console.error('Failed to fetch menu items', err)
    });
  }
}
