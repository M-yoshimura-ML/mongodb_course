
conn = new Mongo();
db = conn.getDB("schools");


db.datatypes.insertOne({
  name: "masa",
  isAdmin: true,
  age:32,
  date: new Date(),
  ts: new Timestamp()
});

db.datatypes.findOne();


// becomes error
db.datatypes.findOne({},{_id:1}).getTimestamp();
// this result is object(document)
db.datatypes.findOne({},{_id:1})

// get creation time from ObjectId
db.datatypes.findOne()._id.getTimestamp();

// in Javascript we have only one data type for numbers
typeof db.datatypes.findOne().age;


db.datatypes.findOne().date.getMonth();

// return 0 (January)
ISODate("2023-01-01T01:00:00.000Z").getMonth();

db.stats();

// db.datatypes.drop();



