import { Routes } from '@angular/router';
import { HomeScreen } from './features/home-screen/home-screen';
import { DescriptionScreen } from './features/description-screen/description-screen';

export const routes: Routes = [
  {
    path: '',
    component: DescriptionScreen,
  },
  {
    path: 'home',
    component: HomeScreen,
  }

];
