import { TransportTypes } from './TransportInterface';
import TransportBase from './TransportBase';

export class Ship extends TransportBase {

    constructor(capacity: number) {
        super(capacity, TransportTypes.SHIP);
    }

    load() {
        console.log("Loading ship...");
        this._empty = false;
        console.log("Ship loaded");
    }
    deliver() {
        if (this._empty === false) {
            console.log("Load delivered!");
            this._empty = true;
            this._delivered = true;
        } else {
            console.log("Ship should be loaded before deliver!");
        }
    }   
}
