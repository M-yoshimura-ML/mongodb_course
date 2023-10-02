
conn = new Mongo();
db = conn.getDB("schools");


use schools;


db.students.insertOne( {
   name: "Alice",
   schoolName: "elementary A"
} );

db.students.insertOne( {
   studentName: "Ace",
   school: "elementary A"
} );

db.students.find();


