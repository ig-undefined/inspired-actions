/**
 * Created by Ihar_Cheliadzinski on 12/14/2015.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var SkillsLevelsCourse = sequelize.define("SkillsLevelsCourse", {}, {
        classMethods: {
            associate: function (models) {
                SkillsLevelsCourse.belongsTo(models.SkillsLevel, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                SkillsLevelsCourse.belongsTo(models.Course, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return SkillsLevelsCourse;
};