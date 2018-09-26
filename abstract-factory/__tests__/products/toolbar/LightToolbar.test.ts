import { Color } from '../../../src/products/Color';
import { LightToolbar } from '../../../src/products/toolbar';

describe('LightToolbar', () => {

  let toolbar: LightToolbar;
  beforeAll(() => {
    toolbar = new LightToolbar(15, ['Home', 'Products', 'Contacts']);
  });

  it('DarkToolbar color is set to white', () => {
    expect(toolbar.getColor()).toBe(Color.WHITE);
  });

  it('Render message is correct', () => {
    expect(toolbar.render()).toBe("I'm a LIGHT toolbar!\n{15, 1, Links[Home,Products,Contacts]}");
  });
});
