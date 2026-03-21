import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MenuItem } from '../../model/menu-item.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-menu-item-screen',
  standalone: true,
  templateUrl: './menu-item-screen.html',
  styleUrl: './menu-item-screen.scss',
})
export class MenuItemScreen {
  private route = inject(ActivatedRoute);

  item = toSignal(
    this.route.data.pipe(map(data => data['itemData'] as MenuItem))
  );
}
