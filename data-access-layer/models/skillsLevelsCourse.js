/**
 * Created by Ihar_Cheliadzinski on 12/13/2015.
 */
var Sequelize = require('sequelize');

function init(seq) {
    return seq.define('SkillsLevelsCourse', {
        SkillsLevelID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'SkillsLevels',
                key: 'id'
            }
        },
        CourseID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Courses',
                key: 'id'
            }
        }
    });
}

module.exports = init;