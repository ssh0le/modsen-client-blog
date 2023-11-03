import { Color, FontSize, StyleModule, Weight } from '@/types';

export class StyleResolver {
  constructor(public styles: StyleModule) {
    this.styles = styles;
  }

  getColor(color: Color) {
    const { purple, yellow, lightGray, mediumGray, darkGray, white, black } =
      this.styles;
    switch (color) {
      case 'purple':
        return purple;
      case 'yellow':
        return yellow;
      case 'light-gray':
        return lightGray;
      case 'medium-gray':
        return mediumGray;
      case 'dark-gray':
        return darkGray;
      case 'white':
        return white;
      default:
        return black;
    }
  }

  getWeight(weight: Weight) {
    const { w500, w600, w700, w900 } = this.styles;
    switch (weight) {
      case '500':
        return w500;
      case '600':
        return w600;
      case '700':
        return w700;
      case '900':
        return w900;
      default:
        return '';
    }
  }

  getFontSize(size: FontSize) {
    if (size === '14') {
      return this.styles.size14;
    } else {
      return '';
    }
  }
}
