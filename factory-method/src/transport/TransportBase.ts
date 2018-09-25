import TransportInterface from './TransportInterface';

export default abstract class TransportBase implements TransportInterface {

    capacity: number;
    protected _empty: boolean;
    protected _delivered: boolean;

    constructor(capacity: number) {
        this.capacity = capacity;
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