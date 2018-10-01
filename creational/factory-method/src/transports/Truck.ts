import TransportBase from './TransportBase';

export default class Truck extends TransportBase {

  load() {
    console.log('Loading truck...');
    this.empty = false;
    console.log('Truck loaded');
  }

  deliver() {
    if (this.empty === false) {
      console.log('Load delivered!');
      this.empty = true;
      this.delivered = true;
    } else {
      console.log('Truck should be loaded before deliver!');
    }
  }
}
