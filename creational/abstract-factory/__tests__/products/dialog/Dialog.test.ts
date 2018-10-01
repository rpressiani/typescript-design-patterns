import { DarkDialog, Dialog } from '../../../src/products/dialog';

describe('DialogBase', () => {

  let dialog: Dialog;
  beforeAll(() => {
    dialog = new DarkDialog(10);
  });

  it('DarkToolbar color is set to blue', () => {
    expect(dialog.getWidth()).toBe(10);
  });
});
