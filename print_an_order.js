const db = require("./models/index");

db.order
  .findById(
    "4b80fa39-87d8-4c80-b2be-67bac277f996",
    { include: [db.user] }
  ).then(order => {
    console.log(JSON.stringify(order, null, 2));
  });
