import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  outlineIconSrc = '../../../assets/heart-outline.svg';
  filledIconSrc = '../../../assets/heart.svg';
  iconSrc = '../../../assets/heart-outline.svg';
  changeIcon() {
    this.iconSrc =
      this.iconSrc === this.outlineIconSrc
        ? this.filledIconSrc
        : this.outlineIconSrc;
  }
}
