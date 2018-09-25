import UIElementInterface from '../UIElementInterface';
import { Color } from '../Color';

export default abstract class DialogBase implements UIElementInterface {

    private  _width: number;
    private _backgroundColor: Color;
    private _textColor: Color;
    
    

    constructor(width: number, backgroundColor: Color, textColor: Color) {
        this._width = width;
        this._backgroundColor = backgroundColor;
        this._textColor = textColor;
    }

    abstract render(): string;

    public toString = () : string => {
        return `{${this._width}, backgroundColor: "${Color[this._backgroundColor]}", textColor: "${Color[this._textColor]}"}`;
    }


    /**
     * Getter width
     * @return {number}
     */
	public get width(): number {
		return this._width;
	}
    
    /**
     * Getter backgroundColor
     * @return {Color}
     */
	public get backgroundColor(): Color {
		return this._backgroundColor;
    }

    /**
     * Getter textColor
     * @return {Color}
     */
	public get textColor(): Color {
		return this._textColor;
	}


}
