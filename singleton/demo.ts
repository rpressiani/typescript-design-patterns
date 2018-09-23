import Logger from './src/Logger'

console.log("If after creating a new Logger you see the same value, then Singleton is working!");

let logger: Logger = Logger.getInstance("FOO");
let anotherLogger: Logger = Logger.getInstance("BAR");

console.log(logger.value);
console.log(anotherLogger.value);
