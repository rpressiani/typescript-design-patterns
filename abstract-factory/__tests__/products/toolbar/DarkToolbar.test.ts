import { Color } from '../../../src/products/Color';
import { DarkToolbar } from '../../../src/products/toolbar';

describe('DarkToolbar', () => {

  let toolbar: DarkToolbar;
  beforeAll(() => {
    toolbar = new DarkToolbar(10, ['Home', 'Contacts']);
  });

  it('DarkToolbar color is set to blue', () => {
    expect(toolbar.getColor()).toBe(Color.BLUE);
  });

  it('Render message is correct', () => {
    expect(toolbar.render()).toBe("I'm a DARK toolbar!\n{10, 0, Links[Home,Contacts]}");
  });
});
