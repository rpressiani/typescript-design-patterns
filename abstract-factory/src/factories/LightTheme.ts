import ThemeFactory from './ThemeFactory';
import { LightDialog } from '../products/dialog';
import { LightToolbar } from '../products/toolbar';

export default class LightTheme implements ThemeFactory{
  createDialog(width: number) {
    return new LightDialog(width);
  }

  createToolbar(height: number, links: string[]) {
    return new LightToolbar(height, links);
  }
}
