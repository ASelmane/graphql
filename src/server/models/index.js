const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

if (process.env.NODE_ENV === 'development') {
    require('babel-plugin-require-context-hook/register');
}

module.exports = (sequelize) => {
    let db = {};
    const modelsDirectory = path.resolve(__dirname, '.');

    fs.readdirSync(modelsDirectory)
        .filter((file) => {
            return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
        })
        .forEach((file) => {
            const model = require(path.join(modelsDirectory, file))(sequelize, Sequelize);
            db[model.name] = model;
        });

    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

    return db;
};