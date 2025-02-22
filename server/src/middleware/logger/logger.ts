import winston from "winston";

const format = winston.format.combine(
  winston.format.colorize({ all: false }),
  winston.format.timestamp(),
  winston.format.printf(({ timestamp, level, message }) => {
    return `[${timestamp}] ${level}: ${message}`;
  })
);

winston.addColors({
  debug: "green",
  info: "cyan",
  silly: "magenta",
  warn: "yellow",
  error: "red",
});

const logger = winston.createLogger({
  level: "info",
  format,
  transports: [new winston.transports.Console()],
});

export { logger };
