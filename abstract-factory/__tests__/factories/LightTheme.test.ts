import { ThemeFactory, LightTheme } from '../../src/factories';
import { LightToolbar } from '../../src/products/toolbar';
import { LightDialog } from '../../src/products/dialog';

describe('LightTheme', () => {

  let theme: ThemeFactory;
  beforeAll(() => {
    theme = new LightTheme();
  });

  it('Objects types are created correctly', () => {
    const toolbar = theme.createToolbar(50, ['Home', 'Contacts']);
    const dialog = theme.createDialog(900);
    expect(toolbar).toBeInstanceOf(LightToolbar);
    expect(dialog).toBeInstanceOf(LightDialog);
  });
});
