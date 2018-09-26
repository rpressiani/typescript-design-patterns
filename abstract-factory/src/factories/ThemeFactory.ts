import { ToolbarBase } from '../products/toolbar';
import { DialogBase } from '../products/dialog';

export default interface ThemeFactory {
  createDialog(width: number): DialogBase;
  createToolbar(height: number, links: string[]): ToolbarBase;
}
