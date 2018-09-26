import Toolbar from './Toolbar';
import { Color } from '../Color';

export default class LightToolbar extends Toolbar {

  constructor(height: number, links: string[]) {
    super(height, Color.WHITE, links);
  }
  render() {
    return `I'm a LIGHT toolbar!\n${this.toString()}`;
  }
}
