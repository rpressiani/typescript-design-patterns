export default class Logger {
    private static instance: Logger;

    private constructor() {}
    public static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
}
