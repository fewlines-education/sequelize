const db = require('./models/index');

db.user.findAll().then(users => {
  console.log(JSON.stringify(users, null, 2));
});
