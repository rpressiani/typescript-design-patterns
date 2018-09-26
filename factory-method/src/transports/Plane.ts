import TransportBase from './TransportBase';

export default class Plane extends TransportBase {

  load() {
    console.log('Loading plane...');
    this.empty = false;
    console.log('Plane loaded');
  }
  deliver() {
    if (this.empty === false) {
      console.log('Load delivered!');
      this.empty = true;
      this.delivered = true;
    } else {
      console.log('Plane should be loaded before deliver!');
    }
  }
}
