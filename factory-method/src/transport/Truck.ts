import { TransportInterface, TransportTypes } from './TransportInterface';

export class Truck implements TransportInterface {
    readonly type: TransportTypes.TRUCK;
    readonly capacity: number;
    private _empty: boolean;
    private _delivered: boolean;

    constructor(capacity: number) {
        this.type = TransportTypes.TRUCK;
        this.capacity = capacity;
        this._empty = true;
        this._delivered = false;
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

    isEmpty() {
        return this._empty;
    }

    isDelivered() {
        return this._delivered;
    }
}