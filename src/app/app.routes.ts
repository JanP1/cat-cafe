import { Routes } from '@angular/router';
import { HomeScreen } from './features/home-screen/home-screen';
import { DescriptionScreen } from './features/description-screen/description-screen';
import { AdoptionScreen } from './features/adoption-screen/adoption-screen';
import { ContactScreen } from './features/contact-screen/contact-screen';
import { MenuScreen } from './features/menu-screen/menu-screen';
import { CatsScreen } from './features/cats-screen/cats-screen';
import { PageNotFound } from './core/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    component: DescriptionScreen,
  },
  {
    path: 'home',
    component: HomeScreen,
  },
  {
    path: 'adoption',
    component: AdoptionScreen,
  },
  {
    path: 'contact',
    component: ContactScreen,
  },
  {
    path: 'menu',
    component: MenuScreen,
  },
  {
    path: 'cats',
    component: CatsScreen,
  },


  {
    path: '**',
    component: PageNotFound,
  },
];
