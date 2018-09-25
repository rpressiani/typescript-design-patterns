import { Shipment, GroundShipment } from '../../src/factory'
import { Truck, Train } from '../../src/transports';
import { GroundTransportTypes } from '../../src/factory/GroundShipment';

describe('GroundShipment', function () {
    
    let shipmentWithTruck: Shipment;
    let shipmentWithTrain: Shipment;

    beforeEach(() => {
         shipmentWithTruck = new GroundShipment(42, GroundTransportTypes.TRUCK);
         shipmentWithTrain = new GroundShipment(42, GroundTransportTypes.TRAIN);
    });

    it('Goods amount is set by constructor', () => {
        expect(shipmentWithTruck.goods).toBe(42);
    });

    it('Transport type is set correctly', () => {
        shipmentWithTruck.send();
        shipmentWithTrain.send();
        expect(shipmentWithTruck.getTransportType()).toBeInstanceOf(Truck);
        expect(shipmentWithTrain.getTransportType()).toBeInstanceOf(Train);
    });

    it('Cannot create ground trasport of type not equal to ground transport', () => {
        expect(() => (new GroundShipment(42, 3)).send()).toThrowError();
    });
})
