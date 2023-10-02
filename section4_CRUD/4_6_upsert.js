// command from shell
// mongosh --4_5_upsert.js

conn = new Mongo();
db = conn.getDB("blog");


// check if there is no document
db.persons.find({name: "masa"})

// not updated
db.persons.updateOne(
  {name: "masa"}, 
  {$set: {name: "masa", hobbies:["Sports", "Music"]} }
);

// upsert(insert one document) 
db.persons.updateOne(
  {name: "masa"}, 
  {$set: {name: "masa", hobbies:["Sports", "Music"]} }, 
  {upsert: true}
);


