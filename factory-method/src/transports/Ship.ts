import TransportBase from './TransportBase';

export default class Ship extends TransportBase {

  load() {
    console.log('Loading ship...');
    this.empty = false;
    console.log('Ship loaded');
  }
  deliver() {
    if (this.empty === false) {
      console.log('Load delivered!');
      this.empty = true;
      this.delivered = true;
    } else {
      console.log('Ship should be loaded before deliver!');
    }
  }
}
