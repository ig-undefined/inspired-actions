/**
 * Created by Ihar_Cheliadzinski on 12/14/2015.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                User.hasMany(models.UsersSkill);
                User.hasMany(models.UsersGoal);
                User.belongsTo(models.PositionsLevel, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: true
                    }
                });
            }
        }
    });

    return User;
};