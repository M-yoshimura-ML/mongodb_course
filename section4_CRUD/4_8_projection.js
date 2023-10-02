// command from shell
// mongosh --4_7_projection.js

conn = new Mongo();
db = conn.getDB("blog");


// normal find
db.persons.find();

//get necessary fields
db.persons.find({}, {name: 1, hobbies: 1});

// specify explicitly not to return _id
db.persons.find({}, {_id: 0, name: 1, hobbies: 1});


