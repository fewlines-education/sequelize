const db = require('./models/index');

db.user.create({
  name: "Jonathan Doe",
  email: "jonathan@doe.com"
}).then(user => {
  console.log(JSON.stringify(user, null, 2));
});
