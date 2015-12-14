/**
 * Created by Ihar_Cheliadzinski on 12/14/2015.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var UsersSkill = sequelize.define("UsersSkill", {}, {
        classMethods: {
            associate: function (models) {
                UsersSkill.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                UsersSkill.belongsTo(models.SkillsLevel, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return UsersSkill;
};