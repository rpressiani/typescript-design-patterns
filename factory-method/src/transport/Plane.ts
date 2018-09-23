import { TransportInterface, TransportTypes } from './TransportInterface';
export class Plane implements TransportInterface {
    
    readonly type: TransportTypes;
    readonly capacity: number;
    private _empty: boolean;
    private _delivered: boolean;

    constructor(capacity: number) {
        this.type = TransportTypes.PLANE;
        this.capacity = capacity;
        this._empty = true;
        this._delivered = false;
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

    isEmpty() {
        return this._empty;
    }

    isDelivered() {
        return this._delivered;
    }
}