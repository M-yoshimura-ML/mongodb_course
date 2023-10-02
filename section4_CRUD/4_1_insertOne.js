// command from shell
// mongosh --file 4_1_insertOne.js

conn = new Mongo();
db = conn.getDB("blog");

db.posts.insertOne({
  "title":"My first Post",
  "author":"masa",
  "tag":["nosql", "mongodb"],
  "body":"this is about nosql"
});

db.posts.findOne();


