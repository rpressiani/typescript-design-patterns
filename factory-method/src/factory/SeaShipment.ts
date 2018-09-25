import { Shipment } from './Shipment';
import { TransportInterface, Ship } from '../transports';

export class SeaShipment extends Shipment {

    protected addTransport(): TransportInterface {
        return new Ship(this.goods);
    }

}