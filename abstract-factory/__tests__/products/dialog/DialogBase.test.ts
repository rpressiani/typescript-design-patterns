import DialogBase from '../../../src/products/dialog/DialogBase';
import { DarkDialog } from '../../../src/products/dialog';

describe('DialogBase', function () {
    
    let dialog: DialogBase;
    beforeAll(() => {
         dialog = new DarkDialog(10);
    });

    it('DarkToolbar color is set to blue', () => {
        expect(dialog.width).toBe(10);
    });
})
