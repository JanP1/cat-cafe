import { Component, signal } from '@angular/core';
import { NotFoundIcon } from '../../shared/icon-components/not-found-icon/not-found-icon';

@Component({
  selector: 'app-home-screen',
  imports: [NotFoundIcon],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.scss',
})

export class HomeScreen {
  logoUrl = signal("/assets/cat_logo2.png")

  isLogoLoaded = signal(true)

  handleLogoLoadError() {
    this.isLogoLoaded.set(false)
  }

}
