import { Color } from '../../../src/products/Color';
import { LightDialog } from '../../../src/products/dialog';

describe('LightToolbar', function () {
    
    let dialog: LightDialog;
    beforeAll(() => {
         dialog = new LightDialog(10);
    });

    it('LightToolbar background color is set to blue', () => {
        expect(dialog.backgroundColor).toBe(Color.WHITE);
    });

    it('LightToolbar text color is set to blue', () => {
        expect(dialog.textColor).toBe(Color.BLACK);
    });

    it('Render message is correct', () => {
        expect(dialog.render()).toBe("I'm a LIGHT dialog!\n{10, backgroundColor: \"WHITE\", textColor: \"BLACK\"}");
    });
})
