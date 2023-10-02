// command from shell
// mongosh --file 4_4_fineOne_vs_find.js

conn = new Mongo();
db = conn.getDB("blog");



const result1 = db.persons.find();

print(result1);

const result2 = db.persons.findOne();

print(result2);

const dataCursor = db.persons.find();

dataCursor.next();

// check if there is next document
dataCursor.hasNext();

// JS expression
db.persons.find().forEach((personData) => {printjson(personData)});

db.persons.find().forEach((personData) => {printjson(personData.name)});

// This doesn't work becaue find() returns array list
db.persons.find().name;

// This does work.
db.persons.findOne().name;

