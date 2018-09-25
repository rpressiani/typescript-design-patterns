import { Shipment } from './Shipment';
import { TransportInterface, Train, Truck } from '../transports';

export enum GroundTransportTypes {
    TRAIN,
    TRUCK,
}

export class GroundShipment extends Shipment {
    private _type: GroundTransportTypes;

    constructor(goods: number, type: GroundTransportTypes) {
        super(goods);
        this._type = type;
    }

    protected addTransport(): TransportInterface {
        switch (this._type) {
            case GroundTransportTypes.TRAIN:
                return new Train(this.goods);
            case GroundTransportTypes.TRUCK:
                return new Truck(this.goods);
            default:
                throw Error("Ground transport selected doesn't exist!");
        }
    }
}
