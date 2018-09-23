import { TransportInterface, TransportTypes } from '../transport/TransportInterface';

export abstract class Shipment {
    private _goods: number;
    private _transport: TransportInterface;
    
    protected abstract addTransport(): TransportInterface;

    constructor(goods: number) {
        this._goods = goods;
    }

    send(): void {
        this._transport = this.addTransport();
        this._transport.load();
        this._transport.deliver();
    }

    get transportType(): TransportTypes {
        return this._transport.type;
    }

    get goods(): number {
        return this._goods;
    }
}