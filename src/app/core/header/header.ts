import { Component, input } from '@angular/core';
import { HeaderButton } from '../../shared/header-button/header-button';

@Component({
  selector: 'app-header',
  imports: [HeaderButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
