import { Train } from '../../src/transport/Train';

describe('Train', function () {
    let train: Train;

    beforeEach(() => {
        train = new Train(42);
    });

    it('Train capacity is set by constructor', () => {
        expect(train.capacity).toBe(42);
    });

    it('Train is empty before loading', () => {
        expect(train.isEmpty()).toBe(true);
    });

    it('Train is not empty after loading', () => {
        train.load();
        expect(train.isEmpty()).toBe(false);
    });

    it('Shipment is not delivered if transport is not loaded', () => {
        train.deliver();
        expect(train.isDelivered()).toBe(false);
    });

    it('Train is empty after delivering', () => {
        train.load();
        train.deliver();
        expect(train.isEmpty()).toBe(true);
    });
})