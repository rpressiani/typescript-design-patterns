import ThemeFactory from './ThemeFactory';
import { DialogBase, DarkDialog } from '../products/dialog';
import { ToolbarBase, DarkToolbar } from '../products/toolbar';

export default class DarkTheme implements ThemeFactory{
  createDialog(width: number): DialogBase {
    return new DarkDialog(width);
  }

  createToolbar(height: number, links: string[]): ToolbarBase {
    return new DarkToolbar(height, links);
  }
}
