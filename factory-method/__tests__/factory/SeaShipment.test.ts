import { Shipment, SeaShipment } from '../../src/factory';
import { Ship } from '../../src/transports';

describe('SeaShipment', function () {
    
    let shipment: Shipment;
    beforeEach(() => {
         shipment = new SeaShipment(42);
    });

    it('Goods amount is set by constructor', () => {
        expect(shipment.goods).toBe(42);
    });

    it('Transport type is set correctly', () => {
        shipment.send();
        expect(shipment.getTransportType()).toBeInstanceOf(Ship);
    });
})
