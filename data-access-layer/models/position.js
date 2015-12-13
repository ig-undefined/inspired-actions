/**
 * Created by Ihar_Cheliadzinski on 12/13/2015.
 */
var Sequelize = require('sequelize');

function init(seq) {
    return seq.define('Position', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Title: {
            type: Sequelize.STRING
        },
        CategoryID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Categories',
                key: 'id'
            }
        }
    });
}

module.exports = init;