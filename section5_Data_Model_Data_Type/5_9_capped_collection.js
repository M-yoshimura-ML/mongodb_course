
conn = new Mongo();
db = conn.getDB("logs");

// data size 30000 byte, max documents are 3
db.createCollection("userlogs", {"capped": true, size: 30000, max: 3 });

db.userlogs.isCapped();


db.userlogs.insertOne({name: "user A"});
db.userlogs.insertOne({name: "user B"});
db.userlogs.insertOne({name: "user C"});

db.userlogs.find();

db.userlogs.insertOne({name: "user D"});

// oldest data is deleted automatically
db.userlogs.find();

db.runCommand( { collMod: "userlogs", cappedMax: 5 } )


db.userlogs.insertOne({name: "user E"});
db.userlogs.insertOne({name: "user F"});

// 5 documents will be returned
db.userlogs.find();

db.userlogs.insertOne({name: "user G"});

// {name: "user B"}'s document will be deleted
db.userlogs.find();


db.userlogs.find().sort({$natural: -1});

