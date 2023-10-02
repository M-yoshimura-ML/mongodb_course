// command from shell
// mongosh --file 6_3_writeConcern.js

conn = new Mongo();
db = conn.getDB("blog");

// defalut: undefined or false
db.persons.insertOne({ name: "White Jr", age: 18}, {writeConcern: {w: 1, j:false}})

db.persons.insertOne({ name: "Skyler", age: 50}, {writeConcern: {w: 1, j:true }})

db.persons.insertOne({ name: "Hank", age: 48}, {writeConcern: {w: 1, j:true, wtimeout: 200 }})

db.comments.find();


