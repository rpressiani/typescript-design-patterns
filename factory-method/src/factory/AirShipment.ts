import { Shipment } from './Shipment';
import { TransportInterface, Plane } from '../transports';

export class AirShipment extends Shipment {

    protected addTransport(): TransportInterface {
        return new Plane(this.goods);
    }

}