import { TransportInterface, TransportTypes } from './TransportInterface';

export class Ship implements TransportInterface {
    readonly type: TransportTypes;
    readonly capacity: number;
    private _empty: boolean;
    private _delivered: boolean;

    constructor(capacity: number) {
        this.type = TransportTypes.SHIP;
        this.capacity = capacity;
        this._empty = true;
        this._delivered = false;
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

    isEmpty() {
        return this._empty;
    }

    isDelivered() {
        return this._delivered;
    }
}