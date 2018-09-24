import { TransportTypes } from './TransportInterface';
import TransportBase from './TransportBase';

export class Train extends TransportBase {

    constructor(capacity: number) {
        super(capacity);
        this.type = TransportTypes.TRAIN;
    }

    load() {
        console.log("Loading train...");
        this._empty = false;
        console.log("Train loaded");
    }
    deliver() {
        if (this._empty === false) {
            console.log("Load delivered!");
            this._empty = true;
            this._delivered = true;
        } else {
            console.log("Train should be loaded before deliver!");
        }
    }
}
