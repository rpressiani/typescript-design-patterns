import { ThemeFactory, DarkTheme } from '../../src/factories';
import { DarkToolbar } from '../../src/products/toolbar';
import { DarkDialog } from '../../src/products/dialog';

describe('DarkTheme', () => {

  let theme: ThemeFactory;
  beforeAll(() => {
    theme = new DarkTheme();
  });

  it('Objects types are created correctly', () => {
    const toolbar = theme.createToolbar(50, ['Home', 'Contacts']);
    const dialog = theme.createDialog(900);
    expect(toolbar).toBeInstanceOf(DarkToolbar);
    expect(dialog).toBeInstanceOf(DarkDialog);
  });
});
