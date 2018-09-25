import ToolbarBase from './ToolbarBase';

export default class LightToolbar extends ToolbarBase {

    constructor(height: number, links: Array<string>) {
        super(height, "blue", links);
    }
    render() {
        console.log(`I'm a DARK toolbar!\n${this.toString()}`);
    }

}
