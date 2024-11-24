function createLogger(typeOfLogMessage) {
    return function createMessage(logMessage) {
        console.log(`${typeOfLogMessage}: ${logMessage}`)
    }
}

const errorLog = createLogger("Error");
const debugLog = createLogger("Debug");

errorLog("Out of memory");
debugLog("You are at the 11 line");
