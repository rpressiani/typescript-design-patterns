import { TransportInterface, TransportTypes } from './TransportInterface';

export default abstract class TransportBase implements TransportInterface {

    capacity: number;
    type: TransportTypes;
    protected _empty: boolean;
    protected _delivered: boolean;

    constructor(capacity: number, type: TransportTypes) {
        this.capacity = capacity;
        this.type = type;
        this._empty = true;
        this._delivered = false;
    }
    
    abstract load();

    abstract deliver();

    isEmpty() {
        return this._empty;
    }

    isDelivered() {
        return this._delivered;
    }
}