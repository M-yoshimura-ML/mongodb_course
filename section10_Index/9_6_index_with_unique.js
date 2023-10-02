
conn = new Mongo();
db = conn.getDB("contactData");

db.users.insertOne({name: "masa", email: "user1@test.com", gender: "male"});

db.users.insertOne({name: "mari", email: "user1@test.com", gender: "female"});

// check inserted data
db.users.find();

// becomes error
db.users.createIndex({email:1}, {unique: true});

db.users.deleteOne({name: "mari"});

// Index can be created
db.users.createIndex({email:1}, {unique: true});

db.products.getIndexes();

// becomes error
db.users.insertOne({name: "mari", email: "user1@test.com", gender: "female"});

// becomes successful
db.users.insertOne({name: "mari", email: "user2@test.com", gender: "female"});

// email index is used
db.users.explain("executionStats").find({email:"user1@test.com"});

