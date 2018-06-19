'use strict';
module.exports = (sequelize, DataTypes) => {
  var order = sequelize.define('order', {
    user_id: DataTypes.UUID
  }, {
    underscored: true,
  });
  order.associate = function(models) {
    order.belongsTo(models.user);
  };
  return order;
};
