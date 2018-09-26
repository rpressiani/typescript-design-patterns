import UIElementInterface from '../UIElementInterface';
import { Color } from '../Color';

export default abstract class ToolbarBase implements UIElementInterface {

  private height: number;
  private color: Color;
  private links: string[];

  constructor(height: number, color: Color, links: string[]) {
    this.height = height;
    this.links = links;
    this.color = color;
  }

  abstract render(): string;

  public toString = () : string => {
    return `{${this.height}, ${this.color}, Links[${this.links}]}`;
  }

  public getHeight(): number {
    return this.height;
  }

  public getColor(): Color {
    return this.color;
  }

  public getLinks(): string[] {
    return Array.from(this.links);
  }
}
