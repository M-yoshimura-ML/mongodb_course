
conn = new Mongo();
db = conn.getDB("contactData");


// check _id value
db.detailPersons.findOne();

// $pull for array
db.detailPersons.updateOne({_id:ObjectId("64c61e29b434bcb78200a741") }, {$pull: {hobbies: "Basketball"}});

// $pop -1 remove first element ("Painting")
db.detailPersons.updateOne({_id:ObjectId("64c61e29b434bcb78200a741") }, {$pop: {hobbies: -1}});

// db.detailPersons.updateOne({_id:ObjectId("64c61e29b434bcb78200a741") }, {$push: {hobbies: "Painting"}});


