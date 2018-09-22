import Logger from "../Logger";

describe('Singleton tests', function() {
    it('Singleton instance is always the same', () => {
        const logger1 = Logger.getInstance();
        const logger2 = Logger.getInstance();
    
        expect(logger1).toBe(logger2);
      });
})
