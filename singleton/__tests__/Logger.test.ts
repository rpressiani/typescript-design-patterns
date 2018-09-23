import Logger from "../src/Logger";

describe('Singleton tests', function () {
    let logger1: Logger;
    let logger2: Logger;

    beforeAll(() => {
        logger1 = Logger.getInstance("FOO");
        logger2 = Logger.getInstance("BAR");
    });

    it('Singleton instance is always the same', () => {
        expect(logger1).toBe(logger2);
    });

    it('Creating a new instance return the already existing one', () => {
        logger1 = Logger.getInstance("BAR");
        expect(logger1.value).toBe("FOO");
    });
})
