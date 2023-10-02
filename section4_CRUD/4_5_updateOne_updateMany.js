// command from shell
// mongosh --4_4_updateOne_updateMany.js

conn = new Mongo();
db = conn.getDB("blog");


// updateOne
db.persons.find();
db.persons.find({name: 'Olivia Davis'})
db.persons.updateOne({name: 'Olivia Davis'}, {$set: {phone: "00 123-456-789"}})
db.persons.find({name: 'Olivia Davis'})



db.persons.find({hobbies: "Cooking"});

// updateMany & add new field
db.persons.updateMany({hobbies: "Cooking"}, {$set:{isSporty: false}});

// updateMany with push
db.persons.updateMany({hobbies: "Cooking"}, {$push:{hobbies: "Watching Movies"}});



