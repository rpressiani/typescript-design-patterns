import UIElementInterface from '../UIElementInterface';

export default abstract class ToolbarBase implements UIElementInterface {

    private  _height: number;
    private _color: string;
    private _links: Array<string>;
    

    constructor(height: number, color: string, links: Array<string>) {
        this._height = height;
        this._links = links;
        this._color = color;
    }

    abstract render();

    public toString = () : string => {
        return `{${this._height}, ${this._color}, Links[${this._links}]}`;
    }

    get height() {
        return this._height;
    }

    get color() {
        return this._color;
    }

    get links() {
        return Array.from(this._links);
    }   
}
