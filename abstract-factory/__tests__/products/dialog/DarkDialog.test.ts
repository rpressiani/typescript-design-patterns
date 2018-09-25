import { Color } from '../../../src/products/Color';
import { DarkDialog } from '../../../src/products/dialog';

describe('DarkToolbar', function () {
    
    let dialog: DarkDialog;
    beforeAll(() => {
         dialog = new DarkDialog(10);
    });

    it('DarkToolbar color is set to blue', () => {
        expect(dialog.backgroundColor).toBe(Color.BLUE);
    });

    it('DarkToolbar text color is set to white', () => {
        expect(dialog.textColor).toBe(Color.WHITE);
    });

    it('Render message is correct', () => {
        expect(dialog.render()).toBe("I'm a DARK dialog!\n{10, backgroundColor: \"BLUE\", textColor: \"WHITE\"}");
    });
})
