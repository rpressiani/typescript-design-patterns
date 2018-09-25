import { Shipment } from './Shipment';
import { TransportInterface, Plane } from '../transport';

export class AirShipment extends Shipment {

    protected addTransport(): TransportInterface {
        return new Plane(this.goods);
    }

}