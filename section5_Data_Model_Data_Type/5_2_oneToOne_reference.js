
conn = new Mongo();
db = conn.getDB("users");

// embedded document
db.users.findOne();

// reference
db.contact.insertOne({
  userId:ObjectId("6502d21280794fa19e88d367"),
  phone:"123-456-789",
  email:"xyz@sample.com"
});

db.access.insertOne({
  userId: ObjectId("6502d21280794fa19e88d367"),
  level: 5,
  group: "dev"
});



