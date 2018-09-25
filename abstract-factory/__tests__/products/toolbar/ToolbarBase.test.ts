import { Color } from '../../../src/products/Color';
import DarkToolbar from '../../../src/products/toolbar/DarkToolbar';
import ToolbarBase from '../../../src/products/toolbar/ToolbarBase';

describe('ToolbarBase', function () {
    
    let toolbar: ToolbarBase;
    beforeAll(() => {
         toolbar = new DarkToolbar(10, ["Home", "Contacts"])
    });

    it('DarkToolbar color is set to blue', () => {
        expect(toolbar.height).toBe(10);
    });

    it('Render message is correct', () => {
        expect(toolbar.links).toEqual(["Home", "Contacts"]);
    });
})
