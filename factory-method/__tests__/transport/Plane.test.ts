import { Plane } from '../../src/transport/Plane';

describe('Plane', function () {
    let plane: Plane;

    beforeEach(() => {
        plane = new Plane(42);
    });

    it('Plane capacity is set by constructor', () => {
        expect(plane.capacity).toBe(42);
    });

    it('Plane is empty before loading', () => {
        expect(plane.isEmpty()).toBe(true);
    });

    it('Plane is not empty after loading', () => {
        plane.load();
        expect(plane.isEmpty()).toBe(false);
    });

    it('Shipment is not delivered if transport is not loaded', () => {
        plane.deliver();
        expect(plane.isDelivered()).toBe(false);
    });

    it('Plane is empty after delivering', () => {
        plane.load();
        plane.deliver();
        expect(plane.isEmpty()).toBe(true);
    });
})
