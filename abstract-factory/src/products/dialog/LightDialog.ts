import DialogBase from './DialogBase';
import { Color } from '../Color';

export default class LightDialog extends DialogBase {

  constructor(width: number) {
    super(width, Color.WHITE, Color.BLACK);
  }

  render(): string {
    return `I'm a LIGHT dialog!\n${this.toString()}`;
  }
}
