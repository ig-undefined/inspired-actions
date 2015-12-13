/**
 * Created by Ihar_Cheliadzinski on 12/13/2015.
 */
var Sequelize = require('sequelize');

function init(seq) {
    return seq.define('UsersGoal', {
        UserID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        GoalID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Goals',
                key: 'id'
            }
        }
    });
}

module.exports = init;