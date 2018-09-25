import TransportBase from './TransportBase';

export default class Truck extends TransportBase {

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
