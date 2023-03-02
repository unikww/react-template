import winston from "winston";

let consolePrintf = winston.format.combine(
  winston.format.colorize({
    all: true,
  }),
  winston.format.label({
    label: "[logger]",
  }),
  winston.format.timestamp({
    format: "YY-MM-DD HH:mm:ss",
  }),
  winston.format.printf((info) => `${info.label} ${info.timestamp} ${info.level}:${info.message}`)
);

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), consolePrintf),
    }),
  ],
});

export default logger;
