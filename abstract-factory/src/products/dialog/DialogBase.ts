import UIElementInterface from '../UIElementInterface';
import { Color } from '../Color';

export default abstract class DialogBase implements UIElementInterface {

  private width: number;
  private backgroundColor: Color;
  private textColor: Color;

  constructor(width: number, backgroundColor: Color, textColor: Color) {
    this.width = width;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
  }

  abstract render(): string;

  public toString = () : string => {
    return `{${this.width}, backgroundColor: "${Color[this.backgroundColor]}", textColor: "${Color[this.textColor]}"}`;
  }

  /**
   * Getter width
   * @return {number}
   */
  public getWidth(): number {
    return this.width;
  }

  /**
   * Getter backgroundColor
   * @return {Color}
   */
  public getBackgroundColor(): Color {
    return this.backgroundColor;
  }

  /**
   * Getter textColor
   * @return {Color}
   */
  public getTextColor(): Color {
    return this.textColor;
  }
}
