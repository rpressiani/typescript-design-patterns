import TransportBase from './TransportBase';

export default class Ship extends TransportBase {

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
