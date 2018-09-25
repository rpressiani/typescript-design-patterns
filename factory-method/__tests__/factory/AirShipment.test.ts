import { AirShipment, Shipment } from '../../src/factory';
import { Plane } from '../../src/transports';

describe('AirShipment', function () {
    
    let shipment: Shipment;
    beforeEach(() => {
         shipment = new AirShipment(42);
    });

    it('Goods amount is set by constructor', () => {
        expect(shipment.goods).toBe(42);
    });

    it('Transport type is set correctly', () => {
        shipment.send();
        expect(shipment.getTransportType()).toBeInstanceOf(Plane);
    });
})
