import { DarkToolbar, Toolbar } from '../../../src/products/toolbar';

describe('ToolbarBase', () => {

  let toolbar: Toolbar;
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
