/**
 * Created by Ihar_Cheliadzinski on 12/13/2015.
 */
var Sequelize = require('sequelize');

function init(seq) {
    return seq.define('SkillsLevel', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        SkillID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Skills',
                key: 'id'
            }
        },
        SkillLevelID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'SkillLevels',
                key: 'id'
            }
        }
    });
}

module.exports = init;