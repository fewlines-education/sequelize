const db = require("./models/index");

db.user
  .findById(
    "061c6b4c-0461-4cac-a53c-6bbf81a45166",
    { include: [db.order] }
  ).then(user => {
    console.log(JSON.stringify(user, null, 2));
  });
