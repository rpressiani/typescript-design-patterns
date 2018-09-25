export default interface TransportInterface {
    readonly capacity: number;

    load();
    deliver();
    isEmpty();
    isDelivered();
}
