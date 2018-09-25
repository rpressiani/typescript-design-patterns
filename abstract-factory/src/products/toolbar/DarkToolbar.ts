import ToolbarBase from './ToolbarBase';
import { Color } from '../Color';

export default class DarkToolbar extends ToolbarBase {

    constructor(height: number, links: Array<string>) {
        super(height, Color.BLUE, links);
    }
    render() {
        return `I'm a DARK toolbar!\n${this.toString()}`;
    }

}
