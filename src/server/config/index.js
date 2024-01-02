module.exports = {
    development: {
        dialect: 'sqlite',
        storage: 'src/server/database/database.sqlite',
        logging: false,
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
            acquire: 30000,
        },
    },
    production: {
        dialect: 'sqlite',
        storage: 'src/server/database/database.sqlite',
        logging: false,
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
            acquire: 30000,
        },
    },
};
