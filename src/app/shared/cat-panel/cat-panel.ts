import { Component, Input } from '@angular/core';
import { Cat } from '../../model/cat.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-component',
  imports: [CommonModule],
  templateUrl: './cat-panel.html',
  styleUrl: './cat-panel.scss',
})

export class CatPanel {
  @Input() isFront = false;
  @Input() isMiddle = true;
  @Input() cat!: Cat;
  @Input() catImageUrl = 'assets/cat.png';
}
