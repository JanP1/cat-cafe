import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[app-coffee-icon]',
  imports: [],
  templateUrl: './coffee-icon.html',
  host: {
    '[attr.viewBox]' : 'viewBox()',
    '[attr.stroke]' : 'currentColor()',
  }
})

export class CoffeeIcon {
  readonly viewBox = input('0 0 24 24');
  readonly currentColor = input('currentColor')

}
