'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    underscored: true,
  });
  user.associate = function(models) {
    user.hasMany(models.order);
  };
  return user;
};
