import TransportInterface from './TransportInterface';

export default abstract class TransportBase implements TransportInterface {

  capacity: number;
  protected empty: boolean;
  protected delivered: boolean;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.empty = true;
    this.delivered = false;
  }

  abstract load();

  abstract deliver();

  isEmpty() {
    return this.empty;
  }

  isDelivered() {
    return this.delivered;
  }
}
