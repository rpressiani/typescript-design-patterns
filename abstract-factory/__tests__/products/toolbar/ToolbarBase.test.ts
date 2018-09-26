import { Color } from '../../../src/products/Color';
import { DarkToolbar } from '../../../src/products/toolbar';
import ToolbarBase from '../../../src/products/toolbar/ToolbarBase';

describe('ToolbarBase', () => {

  let toolbar: ToolbarBase;
  beforeAll(() => {
    toolbar = new DarkToolbar(10, ['Home', 'Contacts']);
  });

  it('Toolbar height is set correctly', () => {
    expect(toolbar.getHeight()).toBe(10);
  });

  it('Render message is correct', () => {
    expect(toolbar.getLinks()).toEqual(['Home', 'Contacts']);
  });
});
