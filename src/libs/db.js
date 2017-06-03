const Sequelize = require('sequelize');
const config = require('../config/config.db.json');
const logger = require('./log')(module);

const options = {
    dialect: config.dialect,
    host: config.host,
    port: config.port,
    logging: logger.debug.bind(logger)
};

module.exports = new Sequelize(
    config.database,
    config.username,
    config.password,
    options
);
