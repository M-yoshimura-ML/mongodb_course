
conn = new Mongo();
db = conn.getDB("test");

// if necessary, insert again
db.users.insertMany([
  {name:"user1", age: 30}, 
  {name:"user2", age: 30}, 
  {name:"user3", age: 31}, 
  {name:"user4"}, 
  {name:"user5"}
]);

db.users.find();


// delete all entries
db.users.deleteMany({});

db.users.drop();

show collections;

db.dropDatabase();

show dbs;




