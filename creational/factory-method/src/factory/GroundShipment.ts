import { Shipment } from './Shipment';
import { TransportInterface, Train, Truck } from '../transports';

export enum GroundTransportTypes {
  TRAIN,
  TRUCK,
}

export class GroundShipment extends Shipment {
  private type: GroundTransportTypes;

  constructor(goods: number, type: GroundTransportTypes) {
    super(goods);
    this.type = type;
  }

  protected addTransport(): TransportInterface {
    switch (this.type) {
      case GroundTransportTypes.TRAIN:
        return new Train(this.getGoods());
      case GroundTransportTypes.TRUCK:
        return new Truck(this.getGoods());
      default:
        throw Error('Ground transport selected doesn\'t exist!');
    }
  }
}
