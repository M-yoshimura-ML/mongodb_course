
conn = new Mongo();
db = conn.getDB("contactData");


// check if there is document
db.detailPersons.findOne({name: "Jane Smith"}, {name:1, age:1});

// $inc
db.detailPersons.updateOne({name: "Jane Smith"}, {$inc: {age: 1}});

db.detailPersons.updateOne({name: "Jane Smith"}, {$inc: {age: -1}});


// $min: update value when specified value is less than current value
db.detailPersons.updateOne({name: "Jane Smith"}, {$min: {age: 35}});
db.detailPersons.findOne({name: "Jane Smith"}, {name:1, age:1});
db.detailPersons.updateOne({name: "Jane Smith"}, {$min: {age: 27}});
db.detailPersons.findOne({name: "Jane Smith"}, {name:1, age:1});

// $max: update value when specified value is greater than current value
db.detailPersons.updateOne({name: "Jane Smith"}, {$max: {age: 35}});

// $mul: multiply current value by specified value
db.detailPersons.updateOne({name: "Jane Smith"}, {$mul: {age: 2}});
db.detailPersons.updateOne({name: "Jane Smith"}, {$mul: {age: 0.5}});

