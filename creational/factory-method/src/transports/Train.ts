import TransportBase from './TransportBase';

export default class Train extends TransportBase {

  load() {
    console.log('Loading train...');
    this.empty = false;
    console.log('Train loaded');
  }
  deliver() {
    if (this.empty === false) {
      console.log('Load delivered!');
      this.empty = true;
      this.delivered = true;
    } else {
      console.log('Train should be loaded before deliver!');
    }
  }
}
