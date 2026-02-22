import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[app-info-icon]',
  imports: [],
  templateUrl: './info-icon.html',
  host: {
    '[attr.viewBox]' : 'viewBox()',
    '[attr.stroke]' : 'currentColor()',
    '[attr.stroke-linejoin]': "'round'",
  }
})
export class InfoIcon {
  readonly viewBox = input('0 0 24 24');
  readonly currentColor = input('currentColor')

}
