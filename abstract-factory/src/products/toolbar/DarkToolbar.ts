import ToolbarBase from './ToolbarBase';
import { Color } from '../Color';

export default class LightToolbar extends ToolbarBase {

    constructor(height: number, links: Array<string>) {
        super(height, Color.BLUE, links);
    }
    render() {
        console.log(`I'm a DARK toolbar!\n${this.toString()}`);
    }

}
