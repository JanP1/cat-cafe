import { Component, signal } from '@angular/core';
import { MenuItemComponent } from '../../shared/menu-item-component/menu-item-component';
import { MenuItem } from '../../model/menu-item.model';

@Component({
  selector: 'app-menu-screen',
  imports: [MenuItemComponent],
  templateUrl: './menu-screen.html',
  styleUrl: './menu-screen.scss',
})
export class MenuScreen {
  menuItems = signal<MenuItem[]>(MENU_ITEMS);

}


export const MENU_ITEMS: MenuItem[] = [
  { id: 1, name: 'Margherita Pizza', description: 'Classic pizza with tomato and mozzarella', price: 8.5 },
  { id: 2, name: 'Pepperoni Pizza', description: 'Spicy pepperoni with cheese', price: 9.5 },
  { id: 3, name: 'Veggie Burger', description: 'Grilled veggie patty with lettuce and tomato', price: 7.0 },
  { id: 4, name: 'Beef Burger', description: 'Juicy beef patty with cheddar cheese', price: 8.0 },
  { id: 5, name: 'Caesar Salad', description: 'Romaine lettuce with Caesar dressing and croutons', price: 6.5 },
  { id: 6, name: 'Greek Salad', description: 'Feta cheese, olives, cucumber, and tomato', price: 6.0 },
  { id: 7, name: 'Spaghetti Bolognese', description: 'Pasta with rich meat sauce', price: 9.0 },
  { id: 8, name: 'Fettuccine Alfredo', description: 'Creamy Alfredo sauce with fettuccine', price: 8.5 },
  { id: 9, name: 'Chicken Wings', description: 'Spicy buffalo wings', price: 7.5 },
  { id: 10, name: 'French Fries', description: 'Crispy golden fries', price: 3.5 },
];
