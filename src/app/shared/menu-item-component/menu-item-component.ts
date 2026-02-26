import { Component, Input } from '@angular/core';
import { MenuItem } from '../../model/menu-item.model';

@Component({
  selector: 'app-menu-item-component',
  imports: [],
  templateUrl: './menu-item-component.html',
  styleUrl: './menu-item-component.scss',
})

export class MenuItemComponent {
  @Input() menuItem!: MenuItem;
  @Input() menuItemImageUrl = 'assets/cat.png';
}
