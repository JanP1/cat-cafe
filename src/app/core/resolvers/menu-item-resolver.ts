import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { MenuItemService } from '../services/menu_items.service';
import { MenuItem } from '../../model/menu-item.model';
import { catchError, EMPTY, map } from 'rxjs';

export const menuItemResolver: ResolveFn<MenuItem> = (route) => {
  const service = inject(MenuItemService);
  const router = inject(Router);

  const typeFromUrl = route.paramMap.get('type');
  const slug = route.paramMap.get('id')!;
  const id = Number(slug.split('_').pop());

  if (isNaN(id)) {
    router.navigate(['/404'], { skipLocationChange: true });
    return EMPTY;
  }

  return service.getItemById(id).pipe(
    map(item => {

      const nameFromUrl = slug.substring(0, slug.lastIndexOf('_')).toLowerCase();

      const formattedDbName = item.name.toLowerCase().replace(/ /g, '_');

      if (!item || item.type !== typeFromUrl || formattedDbName !== nameFromUrl) {
        throw new Error('Not found');
      }

      return item;
    }),
    catchError(() => {
      router.navigate(['/404'], { skipLocationChange: true });
      return EMPTY;
    })
  );
};
