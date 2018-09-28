import { TransportInterface } from '../transports';

export abstract class Shipment {
  private goods: number;
  private transport: TransportInterface;

  protected abstract addTransport(): TransportInterface;

  constructor(goods: number) {
    this.goods = goods;
  }

  send(): void {
    this.transport = this.addTransport();
    this.transport.load();
    this.transport.deliver();
  }

  public getTransportType(): TransportInterface {
    return this.transport;
  }

  public getGoods(): number {
    return this.goods;
  }
}
