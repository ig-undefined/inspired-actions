/**
 * Created by Ihar_Cheliadzinski on 12/13/2015.
 */
var Sequelize = require('sequelize');

function init(seq) {
    return seq.define('UserSkill', {
        UserID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        SkillsLevelID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'SkillsLevels',
                key: 'id'
            }
        }
    });
}

module.exports = init;