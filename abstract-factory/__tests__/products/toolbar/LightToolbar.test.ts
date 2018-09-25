import { Color } from '../../../src/products/Color';
import LightToolbar from '../../../src/products/toolbar/LightToolbar';

describe('LightToolbar', function () {
    
    let toolbar: LightToolbar;
    beforeEach(() => {
         toolbar = new LightToolbar(15, ["Home", "Products", "Contacts"])
    });

    it('DarkToolbar color is set to white', () => {
        expect(toolbar.color).toBe(Color.WHITE);
    });
})