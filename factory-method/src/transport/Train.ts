import { TransportInterface, TransportTypes } from './TransportInterface';

export class Train implements TransportInterface {
    readonly type: TransportTypes;
    readonly capacity: number;
    private _empty: boolean;
    private _delivered: boolean;

    constructor(capacity: number) {
        this.type = TransportTypes.TRAIN;
        this.capacity = capacity;
        this._empty = true;
        this._delivered = false;
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

    isEmpty() {
        return this._empty;
    }

    isDelivered() {
        return this._delivered;
    }
}