// command from shell
// mongosh --file 6_3_writeConcern.js

conn = new Mongo();
db = conn.getDB("blog");

// client doesn't wait for acknowledgement
db.persons.insertOne({ name: "Jesse", age: 30}, {writeConcern: {w: 0}})

db.persons.insertOne({ name: "White", age: 50}, {writeConcern: {w: 1}})

db.comments.find();


// this will become error when server is only primary (local)
db.persons.insertOne({ name: "Marie", age: 40}, {writeConcern: {w: 2}})

