import { Shipment } from './Shipment';
import { TransportInterface } from '../transport/TransportInterface';
import { Plane } from '../transport/Plane';

export class AirShipment extends Shipment {

    protected addTransport(): TransportInterface {
        return new Plane(this.goods);
    }

}