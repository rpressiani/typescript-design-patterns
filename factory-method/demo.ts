import * as readline from 'readline';
import * as shipments from './src/factory'
import { TransportTypes } from './src/transport/TransportInterface'

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
const keyMap = new Map();
keyMap.set('1', TransportTypes.TRAIN);
keyMap.set('2', TransportTypes.TRUCK);
keyMap.set('3', TransportTypes.PLANE);
keyMap.set('4', TransportTypes.SHIP);

let shipment: shipments.Shipment;

process.stdin.on('keypress', (str, key) => {
    console.log(" ");
    if ((key.ctrl && key.name === 'c') || key.name === 'q') {
        process.exit();
    } else {
        if (keyMap.has(str)) {
            switch (keyMap.get(str)) {
                case TransportTypes.TRAIN:
                    shipment = new shipments.GroundShipment(42, TransportTypes.TRAIN);
                    break;
                case TransportTypes.TRUCK:
                    shipment = new shipments.GroundShipment(42, TransportTypes.TRUCK);
                    break;
                case TransportTypes.SHIP:
                    shipment = new shipments.SeaShipment(42);
                    break;
                case TransportTypes.PLANE:
                    shipment = new shipments.AirShipment(42);
                    break;
            }
            shipment.send();
            console.log(" ");
        } else {
            console.log(`No symbol defined for "${str}" key.`);
        }
    }
});

console.log('Press a key to chose shipment type or \'q\' to exit:');
console.log('1 - Train');
console.log('2 - Truck');
console.log('3 - Plane');
console.log('4 - Ship');
console.log(" ");
