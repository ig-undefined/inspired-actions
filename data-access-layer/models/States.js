/**
 * Created by Ihar_Cheliadzinski on 12/14/2015.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var State = sequelize.define("State", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                State.hasMany(models.Goal);
            }
        }
    });

    return State;
};