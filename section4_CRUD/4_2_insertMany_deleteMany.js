// command from shell
// mongosh --file 4_2_insertMany.js

conn = new Mongo();
db = conn.getDB("blog");

db.persons.insertMany([{
  "name":"masa",
  "email":"test@sample.com"
},
{
  "name":"taro",
  "email":"test2@sample.com"
}
]);


db.persons.find();
db.persons.findOne();
db.persons.find({"name": "masa"});


// becomes error
db.persons.deleteMany();

// at this time, not specifying condition
db.persons.deleteMany({});

// check if documents are deleted
db.persons.find();
