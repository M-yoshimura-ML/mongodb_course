
conn = new Mongo();
db = conn.getDB("contactData");

// only "male" index key is stored
db.users.createIndex({name:1}, {partialFilterExpression: {gender: "male"}});

db.users.getIndexes();


db.users.dropIndex("email_1");

db.users.createIndex({email:1}, {unique:true, partialFilterExpression: {email: {$exists: true}}});


db.users.insertOne({name: "white", gender: "male"});

