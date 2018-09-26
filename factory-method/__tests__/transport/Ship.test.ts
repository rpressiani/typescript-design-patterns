import { Ship } from '../../src/transports';

describe('Ship', () => {
  let ship: Ship;

  beforeEach(() => {
    ship = new Ship(42);
  });

  it('Ship capacity is set by constructor', () => {
    expect(ship.capacity).toBe(42);
  });

  it('Ship is empty before loading', () => {
    expect(ship.isEmpty()).toBe(true);
  });

  it('Ship is not empty after loading', () => {
    ship.load();
    expect(ship.isEmpty()).toBe(false);
  });

  it('Shipment is not delivered if transport is not loaded', () => {
    ship.deliver();
    expect(ship.isDelivered()).toBe(false);
  });

  it('Ship is empty after delivering', () => {
    ship.load();
    ship.deliver();
    expect(ship.isEmpty()).toBe(true);
  });
});
