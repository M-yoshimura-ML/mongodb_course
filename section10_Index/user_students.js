// command from shell
// mongosh --file user_students.js

conn = new Mongo();
db = conn.getDB("user");

// It would take 45 - 60 minutes.
for (let i = 0; i < 3000000; i++) {
    db.students.insertOne({
        "studentId": i + 1,
        "testId": Math.floor(Math.random() * 100),
        "score": Math.floor(Math.random() * 100)
    })
}





