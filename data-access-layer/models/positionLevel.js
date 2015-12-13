/**
 * Created by Ihar_Cheliadzinski on 12/13/2015.
 */
var Sequelize = require('sequelize');

function init(seq) {
    return seq.define('PositionLevel', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        PositionID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Positions',
                key: 'id'
            }
        },
        LevelID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Levels',
                key: 'id'
            }
        }
    });
}

module.exports = init;