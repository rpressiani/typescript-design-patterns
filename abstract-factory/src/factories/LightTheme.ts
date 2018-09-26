import ThemeFactory from './ThemeFactory';
import { DialogBase, LightDialog } from '../products/dialog';
import { ToolbarBase, LightToolbar } from '../products/toolbar';

export default class LightTheme implements ThemeFactory{
  createDialog(width: number): DialogBase {
    return new LightDialog(width);
  }

  createToolbar(height: number, links: string[]): ToolbarBase {
    return new LightToolbar(height, links);
  }
}
