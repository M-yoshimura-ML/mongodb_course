
conn = new Mongo();
db = conn.getDB("contactData");


db.detailPersons.find({}, {hobbies: 1});

// projection in array: .$ first matching element & return only one
db.detailPersons.find({hobbies:"Photography"},{"hobbies.$": 1});
db.detailPersons.find({hobbies: {$all:["Photography", "Traveling"]}},{"hobbies.$": 1});


// using elemMatch in projection
db.detailPersons.find({hobbies:"Photography"},{hobbies: {$elemMatch:{$eq: "Reading"}}});
db.detailPersons.find({hobbies:"Photography"},{hobbies: {$elemMatch:{$eq: "Guitar"}}});



// this does not work
db.detailPersons.find({hobbies:"Photography"},{"education.$": 1});

// projection for embedded documents
db.detailPersons.find({hobbies:"Photography"},{"education.degree": 1});


// db.detailPersons.find({hobbies:"Photography"},{education: {$elemMatch:{degree: "Bachelor of Arts"}}});

