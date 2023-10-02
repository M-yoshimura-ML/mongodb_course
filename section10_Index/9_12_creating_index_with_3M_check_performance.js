conn = new Mongo();
db = conn.getDB("user");

// after importing 3 million students data, check count
db.students.find().count();



db.students.findOne();

db.students.find({studentId: 2000000});

db.students.explain('executionStats').find({studentId: 2000000});

db.students.createIndex({studentId: 1});

db.students.getIndexes();


db.students.explain('executionStats').find({studentId: 2000000});

