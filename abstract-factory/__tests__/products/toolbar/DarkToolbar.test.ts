import { Color } from '../../../src/products/Color';
import DarkToolbar from '../../../src/products/toolbar/DarkToolbar';

describe('DarkToolbar', function () {
    
    let toolbar: DarkToolbar;
    beforeEach(() => {
         toolbar = new DarkToolbar(10, ["Home", "Contacts"])
    });

    it('DarkToolbar color is set to blue', () => {
        expect(toolbar.color).toBe(Color.BLUE);
    });

    it('Render message is correct', () => {
        expect(toolbar.render()).toBe("I'm a DARK toolbar!\n{10, 0, Links[Home,Contacts]}");
    });
})
