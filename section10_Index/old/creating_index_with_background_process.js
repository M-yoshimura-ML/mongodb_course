conn = new Mongo();
db = conn.getDB("user");

// after importing 3 million students data, check count
db.students.find().count();


// Foreground Index creation process
db.students.createIndex({studentId: 1});
// while creating index, execute insert soon (insert won't proceed while creating index)
db.students.insertOne({
  studentId: 3000001,
  testId: 95,
  score: 100
});


db.students.getIndexes();


// Background Index creation process
db.students.dropIndex("studentId_1");

db.students.createIndex({studentId: 1}, {background: true});
// while creating index, execute insert soon (insert will proceed )
db.students.insertOne({
  studentId: 3000002,
  testId: 95,
  score: 100
});

