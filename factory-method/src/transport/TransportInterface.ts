export enum TransportTypes {
    TRAIN,
    TRUCK,
    PLANE,
    SHIP,
}

export interface TransportInterface {
    readonly capacity: number;
    readonly type: TransportTypes;

    load();
    deliver();
    isEmpty();
    isDelivered();

}
