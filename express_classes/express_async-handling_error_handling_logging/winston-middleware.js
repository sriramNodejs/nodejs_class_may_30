const winston = require('winston');


const logger = winston.createLogger({
  level: 'info', // Minimum severity level to log
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json() // Outputs as structured JSON (ideal for log parsers)
  ),
  transports: [
    // 1. Write all errors to an isolated error file
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    // 2. Write all application activity logs to a combined file
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

// If not in production, also log to the console with clean formatting
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}

module.exports = {
    logger
}