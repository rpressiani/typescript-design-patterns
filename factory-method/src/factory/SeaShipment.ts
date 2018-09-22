import { Shipment } from './Shipment';
import { TransportInterface } from '../transport/TransportInterface';
import { Ship } from '../transport/Ship';

export class SeaShipment extends Shipment {

    constructor(goods: number) {
        super(goods);
    }

    protected addTransport(): TransportInterface {
        return new Ship(this.goods);
    }

}