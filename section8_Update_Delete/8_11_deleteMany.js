
conn = new Mongo();
db = conn.getDB("test");

db.users.insertMany([
  {name:"user1", age: 30}, 
  {name:"user2", age: 30}, 
  {name:"user3", age: 31}, 
  {name:"user4"}, 
  {name:"user5"}
]);

db.users.find();


// deleteMany
db.users.deleteMany({age: 30});

// $exists
db.users.deleteMany({age: {$exists: false}});



