import DialogBase from './DialogBase';
import { Color } from '../Color';

export default class DarkDialog extends DialogBase {

  constructor(width: number) {
    super(width, Color.BLUE, Color.WHITE);
  }

  render(): string {
    return `I'm a DARK dialog!\n${this.toString()}`;
  }
}
