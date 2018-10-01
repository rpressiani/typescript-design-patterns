import Dialog from './Dialog';
import { Color } from '../Color';

export default class DarkDialog extends Dialog {

  constructor(width: number) {
    super(width, Color.BLUE, Color.WHITE);
  }

  render(): string {
    return `I'm a DARK dialog!\n${this.toString()}`;
  }
}
