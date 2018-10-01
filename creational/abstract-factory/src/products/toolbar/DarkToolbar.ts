import Toolbar from './Toolbar';
import { Color } from '../Color';

export default class DarkToolbar extends Toolbar {

  constructor(height: number, links: string[]) {
    super(height, Color.BLUE, links);
  }
  render() {
    return `I'm a DARK toolbar!\n${this.toString()}`;
  }
}
