/**
 * Created by Ihar_Cheliadzinski on 12/13/2015.
 */
var Sequelize = require('sequelize');

function init(seq) {
    return seq.define('User', {
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
        Surname: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        PositionLevelID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'PositionLevels',
                key: 'id'
            }
        }
    });
}

module.exports = init;