// command from shell
// mongosh --4_6_replaceOne.js

conn = new Mongo();
db = conn.getDB("blog");


// find & decide which _id you pickup
db.persons.find({name: "masa"});


// this will become error
db.persons.replaceOne(
  {_id: ObjectId("64bca8676b8a7115a2ee9947")}, 
  {$set: {name: "Jiro", age:30} }
);


// replace
db.persons.replaceOne(
  {_id: ObjectId("64bca8676b8a7115a2ee9947")}, 
  {name: "Jiro", age:30}
);



// check whole document fields are changed
db.persons.find({_id: ObjectId("64bca8676b8a7115a2ee9947")})

