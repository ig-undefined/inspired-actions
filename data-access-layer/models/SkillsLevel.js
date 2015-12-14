/**
 * Created by Ihar_Cheliadzinski on 12/14/2015.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var SkillsLevel = sequelize.define("SkillsLevel", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                SkillsLevel.belongsTo(models.Skill, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                SkillsLevel.belongsTo(models.SkillLevel, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return SkillsLevel;
};