import { Component, computed, input } from '@angular/core';
import { MenuItem } from '../../model/menu-item.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-item-component',
  imports: [
    RouterLink,
  ],
  templateUrl: './menu-item-component.html',
  styleUrl: './menu-item-component.scss',
})

export class MenuItemComponent {

  menuItem = input.required<MenuItem>();
  menuItemImageUrl = input('assets/cat.png');

  menuItemUrl = computed(() => {
    const item = this.menuItem();
    return `${item.name.replace(/\s/g, "_")}_${item.id}`;
  });
}
