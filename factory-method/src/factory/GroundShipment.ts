import { Shipment } from './Shipment';
import { TransportInterface, TransportTypes } from '../transport/TransportInterface';
import { Train } from '../transport/Train';
import { Truck } from '../transport/Truck';

export class GroundShipment extends Shipment {
    private _type: TransportTypes;

    constructor(goods: number, type: TransportTypes) {
        super(goods);
        this._type = type;
    }

    protected addTransport(): TransportInterface {
        switch (this._type) {
            case TransportTypes.TRAIN:
                return new Train(this.goods);
            case TransportTypes.TRUCK:
                return new Truck(this.goods);
            default:
                throw Error("Ground transport selected doesn't exist!");
        }
    }
}
