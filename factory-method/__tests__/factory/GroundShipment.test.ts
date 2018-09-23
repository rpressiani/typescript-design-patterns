import { Shipment, GroundShipment } from '../../src/factory'
import { TransportTypes } from '../../src/transport/TransportInterface';

describe('GroundShipment', function () {
    
    let shipmentWithTruck: Shipment;
    let shipmentWithTrain: Shipment;

    beforeEach(() => {
         shipmentWithTruck = new GroundShipment(42, TransportTypes.TRUCK);
         shipmentWithTrain = new GroundShipment(42, TransportTypes.TRAIN);
    });

    it('Goods amount is set by constructor', () => {
        expect(shipmentWithTruck.goods).toBe(42);
    });

    it('Transport type is set correctly', () => {
        shipmentWithTruck.send();
        shipmentWithTrain.send();
        expect(shipmentWithTruck.transportType).toBe(TransportTypes.TRUCK);
        expect(shipmentWithTrain.transportType).toBe(TransportTypes.TRAIN);
    });

    it('Cannot create ground trasport of type not equal to ground transport', () => {
        expect(() => (new GroundShipment(42, TransportTypes.SHIP)).send()).toThrowError();
    });
})
