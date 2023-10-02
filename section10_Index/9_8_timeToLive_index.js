
conn = new Mongo();
db = conn.getDB("contactData");


db.logs.insertOne({message: "log 1", createdAt: new Date()});

db.logs.find();

// TTL index is single-field index. compound indexes do not support TTL.
db.logs.createIndex({createdAt:1}, {expireAfterSeconds: 5});

db.logs.getIndexes();


// Change the expireAfterSeconds value for a TTL Index
db.runCommand({
  "collMod": "logs",
  "index": {
    "keyPattern": { "createdAt": 1 },
    "expireAfterSeconds": 3600
  }
});


