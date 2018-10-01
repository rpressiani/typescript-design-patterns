import { Dialog } from '../products/dialog';
import { Toolbar } from '../products/toolbar';
import { ThemeFactory } from '../factories';

export default class Application {
  private toolbar: Toolbar;
  private dialog: Dialog;

  constructor(factory: ThemeFactory) {
    // TODO: Add dynamic configuration
    this.toolbar = factory.createToolbar(50, ['Home', 'Contacts']);
    this.dialog = factory.createDialog(900);
  }

  public render(): string {
    const toolbarRender = this.toolbar.render();
    const dialogRender = this.dialog.render();
    return `${toolbarRender}\n${dialogRender}`;
  }
}
