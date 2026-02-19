import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[app-paw-icon]',
  imports: [],
  templateUrl: './paw-icon.html',

  host: {
    '[attr.viewBox]' : 'viewBox()',
    '[attr.stroke]' : 'currentColor()',
  }
})
export class PawIcon {
  readonly viewBox = input('0 0 24 24');
  readonly currentColor = input('currentColor')

}
