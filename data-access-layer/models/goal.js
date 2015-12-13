/**
 * Created by Ihar_Cheliadzinski on 12/13/2015.
 */
var Sequelize = require('sequelize');

function init(seq) {
    return seq.define('Goal', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        SkillsLevelID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'SkillsLevels',
                key: 'id'
            }
        },
        StateID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'States',
                key: 'id'
            }
        }
    });
}

module.exports = init;