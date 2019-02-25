
const {createLogger, format, transports} = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(format.simple()),
    transports: [
        new transports.File({
            filename: 'test.log'
        })
    ]
});

module.exports = {logger}