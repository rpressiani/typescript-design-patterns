import { Shipment } from './Shipment';
import { TransportInterface } from '../transport/TransportInterface';
import { Ship } from '../transport/Ship';

export class SeaShipment extends Shipment {

    protected addTransport(): TransportInterface {
        return new Ship(this.goods);
    }

}