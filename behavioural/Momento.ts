// The memento pattern is simply a mechanism of providing saved states to classes
// With this saved state you can revert the class to a previous state if required

// Consider the example of a logging class that saves the logs, we can provide the log class with a memento to allow it to revert the state of the log

class LoggerMomento {
    savedLogs: string[] = [];

    constructor(logs: string[]) {
        this.savedLogs = logs;
    }

    getOldLogs(): string[] {
        return this.savedLogs;
    }
}

class Logger {
    logs: string[] = [];

    save(): LoggerMomento {
        return new LoggerMomento(this.logs);
    }

    revert(loggerMomento: LoggerMomento) {
        this.logs = loggerMomento.getOldLogs();
    }

    addLog(log: string) {
        this.logs.push(log);
    }
}

// With this we can use our logger and then create multiple logger mementos of the different saved states
// At any point we can revert to an older state with these momentos

const logger = new Logger();

logger.addLog('Look a log');
logger.addLog('Look another log');

const logSave1 = logger.save();

logger.addLog('And yet another log');

const logSave2 = logger.save();

logger.addLog('The final log');
logger.revert(logSave2);
logger.addLog('Just kidding one more!');
logger.revert(logSave1);
