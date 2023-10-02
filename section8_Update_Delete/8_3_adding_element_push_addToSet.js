
conn = new Mongo();
db = conn.getDB("contactData");


// check _id value
db.detailPersons.findOne();

// $push for array
db.detailPersons.updateOne({_id:ObjectId("64c61e29b434bcb78200a741") }, {$push: {hobbies: "Basketball"}});

// $addToSet: try to add unique element
db.detailPersons.updateOne({_id:ObjectId("64c61e29b434bcb78200a741") }, {$addToSet: {hobbies: "Basketball"}});
// this will be added
db.detailPersons.updateOne({_id:ObjectId("64c61e29b434bcb78200a741") }, {$addToSet: {hobbies: "Dance"}});



// $push object to array
const experience = {company: "Awesome academy", position: "UI UX teacher", duration:3, salary: 84000 };

db.detailPersons.updateOne({_id:ObjectId("64c61e29b434bcb78200a741") }, {$push: {"workExperience": experience}});
// $addToSet : this won't be added
db.detailPersons.updateOne({_id:ObjectId("64c61e29b434bcb78200a741") }, {$addToSet: {"workExperience": experience}});

