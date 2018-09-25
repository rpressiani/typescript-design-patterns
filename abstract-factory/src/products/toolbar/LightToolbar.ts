import ToolbarBase from './ToolbarBase';
import { Color } from '../Color';

export default class LightToolbar extends ToolbarBase {

    constructor(height: number, links: Array<string>) {
        super(height, Color.WHITE, links);
    }
    render() {
        return `I'm a LIGHT toolbar!\n${this.toString()}`;
    }

}
