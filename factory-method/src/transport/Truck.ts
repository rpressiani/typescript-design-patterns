import { TransportTypes } from './TransportInterface';
import TransportBase from './TransportBase';

export class Truck extends TransportBase {

    constructor(capacity: number) {
        super(capacity, TransportTypes.TRUCK);
    }

    load() {
        console.log("Loading truck...");
        this._empty = false;
        console.log("Truck loaded");
    }

    deliver() {
        if (this._empty === false) {
            console.log("Load delivered!");
            this._empty = true;
            this._delivered = true;
        } else {
            console.log("Truck should be loaded before deliver!");
        }
    }
}
