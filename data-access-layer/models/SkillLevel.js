/**
 * Created by Ihar_Cheliadzinski on 12/14/2015.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var SkillLevel = sequelize.define("SkillLevel", {
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
                SkillLevel.hasMany(models.SkillsLevel);
            }
        }
    });

    return SkillLevel;
};