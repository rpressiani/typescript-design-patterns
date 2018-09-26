import { DarkDialog, DialogBase } from '../../../src/products/dialog';

describe('DialogBase', () => {

  let dialog: DialogBase;
  beforeAll(() => {
    dialog = new DarkDialog(10);
  });

  it('DarkToolbar color is set to blue', () => {
    expect(dialog.getWidth()).toBe(10);
  });
});
