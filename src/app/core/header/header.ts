import { Component, input } from '@angular/core';
import { HeaderButton } from '../../shared/header-button/header-button';
import { CoffeeIcon } from '../../shared/icon-components/coffee-icon/coffee-icon';
import { HomeIcon } from '../../shared/icon-components/home-icon/home-icon';
import { PawIcon } from '../../shared/icon-components/paw-icon/paw-icon';

@Component({
  selector: 'app-header',
  imports: [
    HeaderButton,
    CoffeeIcon,
    HomeIcon,
    PawIcon,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
