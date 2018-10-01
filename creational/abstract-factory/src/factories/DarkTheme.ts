import ThemeFactory from './ThemeFactory';
import { DarkDialog } from '../products/dialog';
import { DarkToolbar } from '../products/toolbar';

export default class DarkTheme implements ThemeFactory{
  createDialog(width: number) {
    return new DarkDialog(width);
  }

  createToolbar(height: number, links: string[]) {
    return new DarkToolbar(height, links);
  }
}
