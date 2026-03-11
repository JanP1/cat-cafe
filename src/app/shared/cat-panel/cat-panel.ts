import { Component, Input } from '@angular/core';
import { Cat } from '../../model/cat.model';

@Component({
  selector: 'app-menu-item-component',
  imports: [],
  templateUrl: './cat-panel.html',
  styleUrl: './cat-panel.scss',
})

export class CatPanel {
  @Input() cat!: Cat;
  @Input() catImageUrl = 'assets/cat.png';
}
