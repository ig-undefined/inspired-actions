/**
 * Created by Ihar_Cheliadzinski on 12/13/2015.
 */
var Sequelize = require('sequelize');

function init(seq) {
    return seq.define('Skill', {
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
        GroupID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Groups',
                key: 'id'
            }
        }
    });
}

module.exports = init;