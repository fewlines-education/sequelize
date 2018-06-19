"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orders",
      [
        {
          id: '4b80fa39-87d8-4c80-b2be-67bac277f996',
          user_id: "061c6b4c-0461-4cac-a53c-6bbf81a45166",
          created_at: "NOW()",
          updated_at: "NOW()"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  }
};
