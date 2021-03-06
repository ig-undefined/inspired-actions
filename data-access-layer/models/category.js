/**
 * Created by Ihar_Cheliadzinski on 12/13/2015.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
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
                Category.hasMany(models.Position);
            }
        }
    });

    return Category;
};