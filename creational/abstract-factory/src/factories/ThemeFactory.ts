import { Dialog } from '../products/dialog';
import { Toolbar } from '../products/toolbar';

export default interface ThemeFactory {
  createDialog(width: number): Dialog;
  createToolbar(height: number, links: string[]): Toolbar;
}
