import { Truck } from '../../src/transports';

describe('Truck', function () {
    let truck: Truck;

    beforeEach(() => {
        truck = new Truck(42);
    });

    it('Truck capacity is set by constructor', () => {
        expect(truck.capacity).toBe(42);
    });

    it('Truck is empty before loading', () => {
        expect(truck.isEmpty()).toBe(true);
    });

    it('Truck is not empty after loading', () => {
        truck.load();
        expect(truck.isEmpty()).toBe(false);
    });

    it('Shipment is not delivered if transport is not loaded', () => {
        truck.deliver();
        expect(truck.isDelivered()).toBe(false);
    });

    it('Truck is empty after delivering', () => {
        truck.load();
        truck.deliver();
        expect(truck.isEmpty()).toBe(true);
    });
})