import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[app-home-icon]',
  imports: [],
  templateUrl: './home-icon.html',

  host: {
    '[attr.viewBox]' : 'viewBox()',
    '[attr.stroke]' : 'currentColor()',
  }

})

export class HomeIcon {
  readonly viewBox = input('0 0 16 16');
  readonly currentColor = input('currentColor')

}
