import { TransportInterface } from '../transport';

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

    getTransportType() {
        return this._transport;
    }

    get goods(): number {
        return this._goods;
    }
}