export default class Logger {
    private static instance: Logger;
    value: String;

    private constructor(value: String) {
        this.value = value;
    }
    public static getInstance(value: String) {
        if (!Logger.instance) {
            Logger.instance = new Logger(value);
        }
        return Logger.instance;
    }
}
