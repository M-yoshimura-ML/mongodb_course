
conn = new Mongo();
db = conn.getDB("schools");


db.numbers.insertMany([
  {_id: 1, value: 32 },
  {_id: 2, value: 1.5 },
  {_id: 3, value: "32" },
  {_id: 4, value: NumberInt("2147483647") },
  {_id: 5, value: NumberInt("2147483648") },
  {_id: 6, value: NumberLong("214748364890") },
  {_id: 7, value: Decimal128("3.15")}
]);

// id=5 value is not saved properly
db.numbers.find();

// id=1,4,5
db.numbers.find({value: {$type:"int"}});
// id=6
db.numbers.find({value: {$type:"long"}});

// id=2
db.numbers.find({value: {$type:"double"}});

// id=3
db.numbers.find({value: {$type:"string"}});

// id=1,2,4,5,6,7
db.numbers.find({value: {$type:"number"}});

// id=7
db.numbers.find({value: {$type:"decimal"}});


db.numbers.updateOne({_id:1}, {$inc:{value:10}});

// MongoServerError: Cannot apply $inc to a value of non-numeric type.
db.numbers.updateOne({_id:3}, {$inc:{value:10}});

// successful & data type changed to Long because it exceeds max range of NumberInt
db.numbers.updateOne({_id:4}, {$inc:{value:10}});


