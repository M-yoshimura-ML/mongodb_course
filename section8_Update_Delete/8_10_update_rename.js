
conn = new Mongo();
db = conn.getDB("contactData");

// insert data which doesn't have age field.
db.detailPersons.insertOne({name: "Marie"});
db.detailPersons.find({}, {_id:0,name:1,age:1});

// $rename
db.detailPersons.updateMany({}, {$rename: {age: "totalAge"}});

db.detailPersons.find({}, {_id:0,name:1,age:1});
db.detailPersons.find({}, {_id:0,name:1,totalAge:1});


// $rename
db.detailPersons.updateMany({}, {$rename: {totalAge: "age"}});

db.detailPersons.find({}, {_id:0,name:1,age:1});