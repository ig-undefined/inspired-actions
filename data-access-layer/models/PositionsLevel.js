/**
 * Created by Ihar_Cheliadzinski on 12/14/2015.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var PositionsLevel = sequelize.define("PositionsLevel", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                PositionsLevel.hasMany(models.User);
                PositionsLevel.belongsTo(models.Position, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
                PositionsLevel.belongsTo(models.Level, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return PositionsLevel;
};