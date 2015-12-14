/**
 * Created by Ihar_Cheliadzinski on 12/14/2015.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var UsersGoal = sequelize.define("UsersGoal", {}, {
        classMethods: {
            associate: function (models) {
                UsersGoal.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                UsersGoal.belongsTo(models.Goal, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return UsersGoal;
};