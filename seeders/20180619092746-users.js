'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: '061c6b4c-0461-4cac-a53c-6bbf81a45166',
          name: 'John Doe',
          email: 'john@doe.com',
          created_at: 'NOW()',
          updated_at: 'NOW()',
        },
        {
          id: '097444fc-6a19-40f9-99ae-20c5c769f27a',
          name: 'Jane Doe',
          email: 'jane@doe.com',
          created_at: 'NOW()',
          updated_at: 'NOW()',
        }
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
