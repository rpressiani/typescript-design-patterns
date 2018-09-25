import ToolbarBase from './ToolbarBase';

export default class LightToolbar extends ToolbarBase {

    constructor(height: number, links: Array<string>) {
        super(height, "white", links);
    }
    render() {
        console.log(`I'm a LIGHT toolbar!\n${this.toString()}`);
    }

}
