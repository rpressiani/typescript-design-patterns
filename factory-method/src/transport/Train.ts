import TransportBase from './TransportBase';

export default class Train extends TransportBase {

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
