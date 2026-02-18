import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header-button',
  imports: [],
  templateUrl: './header-button.html',
  styleUrl: './header-button.scss',
})
export class HeaderButton {
  button_text = input("Button");
  icon_source = input("icon")

}
