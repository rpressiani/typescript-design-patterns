import { TransportTypes } from './TransportInterface';
import TransportBase from './TransportBase';

export class Plane extends TransportBase {

    constructor(capacity: number) {
        super(capacity);
        this.type = TransportTypes.PLANE;
    }

    load() {
        console.log("Loading plane...");
        this._empty = false;
        console.log("Plane loaded");
    }
    deliver() {
        if (this._empty === false) {
            console.log("Load delivered!");
            this._empty = true;
            this._delivered = true;
        } else {
            console.log("Plane should be loaded before deliver!");
        }
    }
}
